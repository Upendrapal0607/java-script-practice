// // let users = [

// //     {
  
// //         name: 'Arvind',
  
// //         age: 21,
  
// //         gender: 'MALE',
  
// //         documents: ['Adhar', '12_Marksheet']
  
// //     },
  
// //     {
  
// //         name: 'Sunil',
  
// //         age: 15,
  
// //         gender: 'MALE',
  
// //         documents: ['Pancard', 'Passport']
  
// //     },
  
// //     {
  
// //         name: 'Rahul',
  
// //         age: 18,
  
// //         gender: 'MALE',
  
// //         documents: ['10_Marksheet']
  
// //     },
  
// //     {
  
// //         name: 'Neha',
  
// //         age: 21,
  
// //         gender: 'FFMALE',
  
// //         documents: ['Adhar', '1O_Marksheet', 'Pancard']
  
// //     },
  
// //     {
  
// //         name: 'Tanu',
  
// //         age: 21,
  
// //         gender: 'FFMALE',
  
// //         documents: []
  
// //     }
  
// //   ]

// //   let selectedDocuments = ['Adhar', '1O_Marksheet']

// //     let filteredUsers = users.filter(user => {
// //       for (let el of selectedDocuments) {
// //         if (user.documents.includes(el)) {
// //           return user;
// //         }
// //       }
// //     });
// //     console.log(filteredUsers);

// function UniqueVowel(str) {
//     // let set = new Set(str);
//     // let vowelString = ""
//     // for(let char of set){
//     //    if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u") {
//     //     vowelString+=char
//     //    }
//     // }
//     // return vowelString

//     let obj = {};
//     for(let i = 0; i<str.length; i++){
//         if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u") {
//             obj[str[i]] = obj[str[i]]+1||1
//         }
//     }
//     let vowelString=""
//     for(let key in obj){
// vowelString+=key
//     }
//     return vowelString

// }
// console.log(UniqueVowel("abceeedggu"));
let sum = 0
for (let index = 46; index <=156; index++) {
    sum+=index
    
}
console.log(sum);