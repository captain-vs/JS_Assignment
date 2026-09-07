function dispalyData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve([
                {
                "id":12,"name":"tom","salary":1222
                }
            ])
        },4000)
    });
}

async function getData() {

    console.log("Screen Loading...");
    let data= await dispalyData();
    console.log(data);   
}
getData()