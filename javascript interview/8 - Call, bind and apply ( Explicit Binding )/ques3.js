console.log("start");


const fn=()=>
  new Promise((resolve,reject)=>{
    console.log(1);
    resolve("success");
 });
console.log('middle');

fn().then((res)=>{
    console.log(res);
});

 console.log('end');

// kyoki jab function call hoga uske bad hi  ye print hoga
 /*
output-
start
middle
1
end
success

 */
 
