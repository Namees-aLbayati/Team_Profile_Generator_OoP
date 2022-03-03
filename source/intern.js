const Employee=require("./employee")
class Intern extends Employee{
    constructor(name,email,id,School){
        super(name,email,id)
        this.School=School;
    }
    getRole(){
        return 'Intern'
    }
  
}
module.exports=Intern;