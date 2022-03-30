function prom (completed){
    return new Promise(function (resolve,reject){
        console.log("data is fetching");
        setTimeout (()=>{
            if(completed){
                resolve("yes");
            }else{
                reject("no");
            }
        },5000)
       
    })
}

prom(true).then((out)=>{
    console.log(out);
}).catch((Error)=>{
    console.log(Error)
});