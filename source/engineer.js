const Employee=require("./employee")

class Engineer extends Employee{
    constructor(Name,id,Email,GitHub){
        super(Name,Email,id)
        this.GitHub=GitHub;
    }
    getGithub(){
        return this.GitHub
    }
    getRole(){
        return 'Engineer'

    }
}
module.exports=Engineer;
// const tryy=new Engineer('namees',"jsks",33,'@@@')
// tryy.getGithub
