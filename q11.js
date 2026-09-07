function withdralAmount(balance, amount){
    try {
        if (balance<amount) {
            throw new Error("The amount exceed the  balance please put sufficient balance to withdraw moneye!!")
        } else if(amount<=0) {
            throw new Error("The amount must be greater then Zero")
        }else{
            console.log("MOney withdraw Completed");
            
        }
    } catch (error) {
        console.log(error.name+" : "+error.message);
        
    }
}
withdralAmount(5000,220)