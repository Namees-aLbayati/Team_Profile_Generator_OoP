const Employee=require("./employee")
class Intern extends Employee{
    constructor(name,email,id,School){
        super(name,email,id)
        this.School=School;
    }
    getinfoN(){
        return this.School
    }  getposition(){
        return 'Intern'

    }
}
module.exports=Intern;