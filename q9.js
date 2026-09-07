function Payment(amt){
    try{
        
    if(amt<=0){
        throw new Error("payment zero, deposit money");
    }else{
        console.log("Payment");
    }

    }
    catch(error){
        console.log(error.message);
        
    }
    finally{
        console.log("Payment Process Successfull");
        
    }
}
Payment(0)
