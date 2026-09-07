function createEmployee(name, department="IT"){
   console.log(name,department);
   
    
}
createEmployee("tom","CS")


function calculateTotalSalary(...salary){
    return salary.reduce((sum,salary)=>
        sum+=salary
    )
}
console.log(calculateTotalSalary(12,1,21,2));
