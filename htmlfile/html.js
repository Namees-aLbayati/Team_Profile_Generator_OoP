function creathtml(data){
    console.log(JSON.stringify(data))
    return 'hellooo'
//    data.forEach(user => {
//         const a=Object.keys(answersArray[0]).toString();
//         console.log("i am in displayTeamProfile js for each data -> ",a=='Manager');

        
// })
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
