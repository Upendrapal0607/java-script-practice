const Promise1= T=>new Promise((resolve, reject) => T?resolve("promise 1"):reject("promise 1 error"))
const Promise2 = T => new Promise((res,rej)=>T?res("Promise 2"):rej("Promise 2 err"))
Promise1(true).then(async res=>{
    console.log({res});
    const res_1 = await Promise1(true);
    console.log({ res });
}).catch(err=>{
    console.log({err});
});
Promise2(false).then(res=>{
    console.log({res});
}).catch(err=>{
    console.log({err});
});

const promiseArr = [Promise1,Promise1]
Promise.all(promiseArr).then(result=>{
    console.log({result});

}).catch(error=>{
    console.error(error);
})