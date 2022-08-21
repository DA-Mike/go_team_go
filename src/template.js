const fs = require('fs');

//writes html file
function generateHTML(data) {
        fs.writeFile('./dist/index.html', generateBody(data), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

//generates body of html file
function generateBody(data) {
    return  `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://kit.fontawesome.com/368d8c73a4.js" crossorigin="anonymous"></script>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
                    <link href="style.css" rel="stylesheet">
                    <title>Go Team Go!</title>
                </head>
                <body>
                <header class="my_team_header bg-danger">
                    <h1 class="my_team text-white">My Team</h1>
                </header>
                <div class="container team_container" style="background-color: white";>
                ${addCards(data)}
                </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                    <script src="../src/template.js"></script>
                    </body>
                </html>`
}

//adds employee cards to html
function addCards(data) {
    var domStr = '';
    for (i = 0; i < data.length; i++) {
    let newEl = `
        <div class="card_container bg-light">
            <div class="banner_container bg-primary">
            <h2 class="text-white">${data[i].name}</h2>
            <h3 class="text-white">${iconFinder(data[i].role)} ${data[i].role}</h3> 
            </div>
            <div class="bg-light">
            <ul class="info_list">
            <li class="list_item">ID: ${data[i].id}</li>
            <li class="list_item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
            <li class="list_item">${lastElement(data[i])}</li>
            </ul>
            </div>
        </div>
        `
        domStr = domStr.concat(newEl);
    }
    return domStr;
}

//finds icon for employee based on employee's role
function iconFinder(data) {
    if (data === 'Manager') {   
        return `<i class="fa-solid fa-mug-hot"></i>`;
    } else if (data === 'Engineer') {
        return `<i class="fa-solid fa-glasses"></i>`;
    } else {
        return `<i class="fa-solid fa-user-graduate"></i>`;
    }
}

//adds final line of employee card based on role
function lastElement(data) {
    if (data.role === 'Manager') {
        return `Office Number: ${data.officeNumber}`;
    } else if (data.role === 'Engineer') {
        return `GitHub: <a href="https://github.com/${data.github}/" target="_blank">${data.github}</a>`;
    } else {
        return `School: ${data.school}`;
    }
}

//exports function
module.exports = generateHTML;

