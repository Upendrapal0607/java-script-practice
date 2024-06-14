const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require("dotenv").config()
const FileRouter = Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../public/Images/');
       
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

//  this is validation for file type. Ex = png/jpeg/gpg
const fileFilter = (req, file, cb) => {
    
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only images are allowed!'), false);
    }
};

const upload = multer({
    storage,
    // fileFilter, // use for file validation
    limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB
});

FileRouter.post('/', upload.single('myfile'), async(req, res) => { // myfile is similar name it is send from the front-end
    // console.log(req.file);                                  // name should be same

    try {
  

        const filePath = req.file.path;
      
        
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(filePath);


        // Remove file from local storage after upload
        fs.unlinkSync(filePath);
        const data =  JSON.parse(fs.readFileSync("./db.json", "utf8"));
        const newImage = {
            id:Date.now(),
            url:result.secure_url,

         }
         data?.data.push(newImage);
         fs.writeFileSync("./db.json", JSON.stringify(data), "utf8");
     
        res.send({message:'File uploaded successfully!',data});
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during the file upload.');
    }
});

module.exports = FileRouter;
