class Emp{
    id; name; salary;

    constructor(id, name, salary){

        this.id=id,
        this.name=name,
        this.salary=salary
    }

     displayInfo(){

        console.log("Id: "+this.id+" Name: "+this.name+" Salary: "+this.salary);
        
    }
}

const a=new Emp(12,"tom",1222);
console.log(a);

const b=new Emp(11,"jack",2222);
b.displayInfo()

