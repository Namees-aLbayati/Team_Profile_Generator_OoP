function creathtml(data) {
    let sectioncode = "";
    let fullcode = [];
    data.forEach(tryy => {
        if (Object.keys(tryy)[0] == 'engineer') {
            //    console.log(Object.values(tryy)[0]['id'])
            //    console.log(Object.values(tryy)[0].id)


            sectioncode = `<div class="card w-25">
                      <div class="card-header text-center">
                          <h2 class="card-title">${Object.values(tryy)[0].name}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses"></i>Engineer</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${Object.values(tryy)[0].id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${Object.values(tryy)[0].Email}">${Object.values(tryy)[0].Email}</a></li>
                              <li class="list-group-item">GitHub Page: <a href="https://github.com/${Object.values(tryy)[0].GitHub}">${Object.values(tryy)[0].GitHub}</a></li>

                          </ul>
           
                      </div>
                  </div>`

        } else if (Object.keys(tryy)[0] == 'Manager') {
            sectioncode = `<div class="card w-25">
        <div class="card-header text-center">
            <h2 class="card-title">${Object.values(tryy)[0].name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses"></i>Manager</h3>
            <h3>Room Number: ${Object.values(tryy)[0].RoomNo}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Object.values(tryy)[0].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Object.values(tryy)[0].Email}">${Object.values(tryy)[0].Email}</a></li>

            </ul>

        </div>
    </div>`

        } else {
            sectioncode = `<div class="card w-25">
        <div class="card-header text-center">
            <h2 class="card-title">${Object.values(tryy)[0].name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Object.values(tryy)[0].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Object.values(tryy)[0].Email}">${Object.values(tryy)[0].Email}</a></li>
                <li class="list-group-item">School Referal :${Object.values(tryy)[0].School} </li>

            </ul>

        </div>
    </div>`

        }
        fullcode += sectioncode;
    })
    return fullcode;


}
function htmlfunction(data) {
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
    
        <title>Team Profile Generator By Namees Albayati</title>
    </head>
    
    <body class="text-darkt" style="background-image: url(./photo-1550684376-efcbd6e3f031.jpeg);max-height: 100vh;">
    <h1 class="text-center text-light">Team Profiles</h1>
    <div class="container-fluid d-flex flex-wrap justify-content-between">
    ${creathtml(data)}

        
    </div>
    
    
    
    </body>
    
    </html>`
}

module.exports = htmlfunction;
