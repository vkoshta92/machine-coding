console.log("start");   //1

const promise1= new Promise((resolve,reject)=>{
    console.log(1);  //2
    resolve(2);
})

promise1.then((res)=>{
    console.log(res);  //4
})

console.log('end');  //3


// start
// 1
// end
// 2
