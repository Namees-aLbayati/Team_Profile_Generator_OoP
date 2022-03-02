function creathtml(data){
console.log(data.Manager)
    let sectioncode='';
   let fullcode=[];
   data.forEach(tryy=>{
       console.log(Object.keys(tryy),tryy.Manager)
       if(Object.keys(tryy).toString()==='engineer'){
           console.log('manager true')
       }
   })
//     data.forEach(user=>{
//         console.log("i am in displayTeamProfile js for each data -> ",Object.keys(user)[0].toString()=='Manager'||'engineer');
//         if(Object.keys(user)[0].toString()==='Manager'){
//            sectioncode=` <div class="card w-50">
//            <div class="card-header">
//                <h2 class="card-title">${user.Manager.name}</h2>
//                <h3 class="card-title"><i class="fas fa-glasses"></i>Manager</h3>
//                <h3> Room No:${user.Manager.RoomNo}</h3>
//            </div>
//            <div class="card-body">
//                <ul class="list-group">
//                    <li class="list-group-item">ID: ${user.Manager.id}</li>
//                    <li class="list-group-item">Email: <a href="mailto:${user.Manager.email}">${user.Manager.email}</a></li>
                  
//                </ul>

//            </div>
//        </div>
//            `

//         }else if(Object.keys(user)[0].toString()==='engineer'){
//             sectioncode=` <div class="card w-50">
//             <div class="card-header">
//                 <h2 class="card-title">${user.engineer.name}</h2>
//                 <h3 class="card-title"><i class="fas fa-glasses"></i>Engineer</h3>
//             </div>
//             <div class="card-body">
//                 <ul class="list-group">
//                     <li class="list-group-item">ID: ${user.engineer.id}</li>
//                     <li class="list-group-item">Email: <a href="mailto:${user.engineer.email}">${user.engineer.email}</a></li>
                   
//                 </ul>
 
//             </div>
//         </div>
//             `        }else{
//                 sectioncode=` <div class="card w-50">
//                 <div class="card-header">
//                     <h2 class="card-title">${user.intern.name}</h2>
//                     <h3 class="card-title"><i class="fas fa-glasses"></i>Engineer</h3>
//                 </div>
//                 <div class="card-body">
//                     <ul class="list-group">
//                         <li class="list-group-item">ID: ${user.intern.id}</li>
//                         <li class="list-group-item">Email: <a href="mailto:${user.engineer.email}">${user.engineer.email}</a></li>
                       
//                     </ul>
     
//                 </div>
//             </div>
//                 `
//             }
//     })
//     fullcode.push(sectioncode)
// console.log(fullcode)
// return fullcode.toString()
}
function htmlfunction(data){
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css">
    
        <title>Team Profile Generator By Namees Albayati</title>
    </head>
    
    <body class="text-light">
    <h1 class="text-center">Team Profiles</h1>
    <div class="container-fluid d-flex flex-wrap">
    ${creathtml(data)}

        
    </div>
    
    
    
    </body>
    
    </html>`
}

module.exports=htmlfunction;
