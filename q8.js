function processOrder(){
    console.log(sum+totalCost);
    
}

function validateOrder(){

}

function checkStock(){
    try {
        processOrder()
    } catch (error) {
        console.log(error.name+" : "+error.message); 
    }
}
checkStock()