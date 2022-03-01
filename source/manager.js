const Employee=require("./employee")
class Manager extends Employee{
    constructor(Name,Email,Id,RoomNo){
        super(Name,Email,Id)
        this.RoomNo=RoomNo;
        

    }getinfoM(){
        return this.RoomNo
    }
    getposition(){
        return 'Manager'

    }
}
module.exports=Manager;