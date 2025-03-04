console.log("start");
 const promise1= new Promise((resolve,reject)=>{
    console.log(1);
    console.log(2);
 });

 promise1.then ((res)=>{
    console.log(res);
 })

 console.log('end');

//  / if tthere is not  resolve it will not be going in then 
