const employees = [
    { name: 'tom', salary: 40000 },
    { name: 'jack', salary: 60000 },
    { name: 'Cal', salary: 75000 }
];

function filterEmployees(arr, minSalary) {
    return arr.filter((emp) => emp.salary > minSalary);
}

console.log(filterEmployees(employees, 50000));
