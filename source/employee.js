class Employee{
    constructor(name,Email,id){
        this.id=id;
        this.Email=Email;
        this.name=name;

    }getinfoE(){
        console.log(`${this.name} \n ${this.Email} \n ${this.id}`)
        return this.name,this.Email,this.id
    }
}
// const namees=new Employee('namees mohammed','jdhjd@',11332)
// namees.getinfo()
module.exports=Employee;