const fs = require('fs');

function generateHTML(data) {
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
                <div class="jumbotron center-jumbo" style="background-color: gray";>
                    <h1 class="display-4">${name}</h1>
                    <h2 class="lead">${location}</h2>
                    <p class="lead">${bio}</p>
                    <ul class="lead my-4">
                        <li>${linkedIn}</li>
                        <li>${gitHub}</li>
                    </ul>
                  </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                </body>
                </html>`
        fs.writeFile('../../index.html', generateHtml(data.name, data.location, data.bio, data.linkedIn, data.gitHub), (err) =>
        err ? console.error(err) : console.log('Success!'));
}

module.exports = generateHTML;