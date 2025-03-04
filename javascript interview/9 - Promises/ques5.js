

function job(state){
    return new Promise (function(resolve,reject){
        if(state){
            resolve("success");

        }
        else{
            reject("error")
        }
    });
}

let promise= job(true);


promise
.then(function(data){
    console.log(data);
    return job(false);
})
