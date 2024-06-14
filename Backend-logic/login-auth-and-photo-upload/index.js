const express = require('express');
const cors = require("cors");
const route = require('./Route/report.route');
const connectDB = require('./db/db');
const EmailRouter = require('./Route/email.sender.route');
const FileRouter = require('./Route/file.route');
const googleRoute = require('./Route/google.login');
const app = express();
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// app.use("/report",route)
app.use('/email',EmailRouter);
app.use("/file",FileRouter);
app.use("/login",googleRoute);

app.listen(8080, async() => {
  console.log('Example app listening on port 3000!');
  try {
    // await connectDB()
  } catch (error) {
    console.log({error});
  }
});