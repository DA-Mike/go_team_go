const fs = require('fs');

function generateHTML(data) {
        fs.writeFile('./dist/index.html', generateBody(data), (err) =>
        err ? console.error(err) : console.log('Success!'));
        // addCards(data);
}

function generateBody(data) {
    // console.log("generateBody: ", data);
    return  `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
                    <title>Go Team Go!</title>
                </head>
                <body>
                <header>
                    <h1 class="my_team danger">My Team</h1>
                </header>
                <div class="container team_container" style="background-color: white";>
                ${addCards(data)}
                </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                    <script src="../src/template.js"></script>
                    </body>
                </html>`
}

function addCards(data) {
    console.log("addCards: ", data);
    const domArr = [];
    for (i = 0; i < data.length; i++) {
        let domStr = 
         `
        <div class="card_container">
            <div class="banner_container">
            <h2>${data[i].name}</h2>
            <h3>${data[i].role}</h3> 
            </div>
            <ul class="info_list">
            <li>ID: ${data[i].id}</li>
            <li>Email: ${data[i].email}</li>
            <li>${lastElement(data[i])}</li>
            </ul>
        </div>
        `
        domArr.push(domStr);
    }
    
    // function sendToDom(data) {
    //     console.log("sendToDom: ", data);
    //     return data;
    // }

    // return domArr.forEach(sendToDom);
    const iterator = domArr.values();
    for (const value of iterator) {
        return value;
      }
}

function lastElement(data) {
    if (data.role === 'Manager') {
        return `Office Number: ${data.officeNumber}`;
    } else if (data.role === 'Engineer') {
        return `GitHub: ${data.github}`;
    } else {
        return `School: ${data.school}`;
    }
}

module.exports = generateHTML;

// function addCards(data) {
//     console.log("addCards:", data);

//     for (i = 0; i < data.length; i++) {
    
//         const teamEl = document.getElementsByClassName('team_container');
//         const cardEl = document.createElement('div');
//         const bannerEl = document.createElement('div');
//         const nameEl = document.createElement('h2');
//         const roleEl = document.createElement('h3');
//         const listEl = document.createElement('ul');
//         const idEl = document.createElement('li');
//         const emailEl = document.createElement('li');
//         const varEl = document.createElement('li');

//         nameEl.innerHTML = data[i].name;
//         roleEl.innerHTML = data[i].role;
//         idEl.innerHTML = data[i].id;
//         emailEl.innerHTML = data[i].email;
        
//         if (data[i].role === 'Manager') {
//             varEl.innerHTML = data[i].officeNumber;
//         } else if (data[i].role === 'Engineer') {
//             varEl.innerHTML = data[i].github;
//         } else {
//             varEl.innerHTML = data[i].school;
//         }

//         bannerEl.appendChild(nameEl);
//         bannerEl.appendChild(roleEl);
//         cardEl.appendChild(bannerEl);
//         listEl.appendChild(idEl);
//         listEl.appendChild(emailEl);
//         listEl.appendChild(varEl);
//         cardEl.appendChild(listEl);
//         teamEl.appendChild(cardEl);
//     }
// }
