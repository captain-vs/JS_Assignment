const square=[1,2,3,4,5,6]

const a = function (arr) {
  return arr.map(number => number * number); 
};
console.log("Square of number----------");
console.log(a(square));




const arr=[22,1,3,2,3]
function filterEvenNumber(arr){
    return arr.filter(number => number %2!= 0); 
}
console.log("Odd Numbers-----------");
console.log(filterEvenNumber(arr));


function calculateTotalSalary(...salary){
    return salary.reduce((sum,salary)=>
        sum+=salary
    )
}
console.log("Total of Numbers---------");
console.log(calculateTotalSalary(1,2,3,4,5,6));
