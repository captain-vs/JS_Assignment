const arr=[12,53,23,43,33]
let Ecount=0;
let Ocount=0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        Ecount++
        
    }else{
        Ocount++
        
    }
    
}
console.log("Total Even numbers are: "+Ecount+" Total odd numebrs are: "+Ocount);

