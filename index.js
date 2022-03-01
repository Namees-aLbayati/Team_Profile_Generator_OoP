const inquirer=require('inquirer');
const manager=require('./source/manager')
const engineer=require("./source/engineer")
const intern=require('./source/intern')
const fs=require('fs');
const { type } = require('express/lib/response');
const Choices = require('inquirer/lib/objects/choices');
const answersArray=[];
const ManagerQuestion=[
    {
        type: "input",
        name: "name",
        message: "Enter the team manager's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "One name at least"
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the team manager's id?",
        validate: answer => {
            if (answer) {
                return true;
            }
            return "Actual ID number "
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the team manager's email?",
        validate: answer => {
            if(answer){
                return true;
            }else{
                return 'Enter Your Email '
            }
        
        }
    },
    {
        type: "number",
        name: "officeNumber",
        message: "Enter the team manager's office number?"
    },
    {
        name: "NewMember",
        type: "confirm",
        message: "Do you want add any other team member?",
    }]
    function AddTeamMember(){
        inquirer.prompt([{
            name:'newadd',
            type:"list",
            message:"what do you want to add??Engineer or intern",
            choices:["engineer","intern"]}
        ]).then((answer)=>{
            console.log(answer)
            var Questions=[{
                type: "input",
                name: "name",
                message: "Enter a name for the " + answer.newadd,
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            {
                type: "number",
                name: "id",
                message: "Enter id for the " + answer.newadd
            },
            {
                type: "input",
                name: "email",
                message: "Enter email for the " + answer.newadd,
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return "Please enter your email before continue"
                }
            }];
            if(answer.newadd=="engineer"){
                Questions.push({
                    type: "input",
                    name: "github",
                    message: "Engineer Github username?  ",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character."
                    }
                })
            }else if(answer.newadd=='intern'){
                Questions.push({
                    type: "input",
                    name: "school",
                    message: "school's name that you comming from ?" ,
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character."
                    }
                })
            }
            
inquirer.prompt(Questions).then((results)=>{
    console.log(results)
})

            





        })


    }



function init() {
    inquirer
        .prompt(ManagerQuestion)
        .then((answers) => {
            
            const managerinfo = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
           answersArray.push({Manager:managerinfo});
            if (answers.NewMember) {
             AddTeamMember();
            }  else{

console.log('done')       
     }
        });
}
// Function call to initialize app
init();