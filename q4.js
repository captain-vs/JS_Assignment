function Payment(pay){
    return new Promise((resolve, reject) => {
        if(pay){
            resolve("Payment Successfull");
            
        }
        else{
            reject("Payment Denied")
        }
    });
}

Payment(true) .then((e)=>{
    console.log(e);  
})
.catch((error)=>{
    console.log(error);
    
})