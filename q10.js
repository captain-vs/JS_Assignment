class invalidSalaryError extends Error{
    constructor(message){
        super(message)
        this.name="InvalidSalaryError"
    }
}

function validSalary(salary){
    try {
         if (salary<10000) {
        throw new invalidSalaryError("The salary must atleast 10,000 to withdrawal")
        console.log("Salary invalid");
        
      } 
    } catch (error) {
         console.log(error.name+" : "+error.message);
        
    }

}
validSalary(5000)