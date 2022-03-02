const Employee=require("./employee")
class Intern extends Employee{
    constructor(name,email,id,School){
        super(name,email,id)
        this.School=School;
    }
  
}
module.exports=Intern;