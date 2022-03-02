const Employee=require("./employee")
class Manager extends Employee{
    constructor(Name,Email,Id,RoomNo){
        super(Name,Email,Id)
        this.RoomNo=RoomNo;
        
    }
}
module.exports=Manager;