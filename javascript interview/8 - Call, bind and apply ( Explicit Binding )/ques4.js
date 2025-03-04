// promise chaninig

function job(){
    return new Promise (function(resolve,reject){
        reject();
    })
}

let promise= job();

promise
.then(function(){
    console.log('success1');
})
.then(function(){
    console.log('success2');
})
.then(function(){
    console.log('success3');
})
.catch(function(){
    console.log('Error1');
})
.then(function(){
    console.log('success 4');
})