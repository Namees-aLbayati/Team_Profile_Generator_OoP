const Employee=require("./employee")

class Engineer extends Employee{
    constructor(Name,Email,id,GitHub){
        super(Name,Email,id)
        this.GitHub=GitHub;
    }
    getinfoG(){
        return this.GitHub
    }
    getposition(){
        return 'Engineer'

    }
}
module.exports=Engineer;
// const tryy=new Engineer('namees',"jsks",33,'@@@')
// tryy.getinfoE()