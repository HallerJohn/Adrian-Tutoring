function buildFile(manager, engineers, interns){
    var file = head + body1;
    file += buildManagerList(manager.name, manager.id, manager.email, manager.office, manager.role);
    for(i = 0; i < engineers.length; i++){
        file += buildEngineerList(engineers[i].name, engineers[i].id, engineers[i].email, engineers[i].github, engineers[i].role);
    }
    for(i = 0; i < interns.length; i++){
        file += buildInternList(interns[i].name, interns[i].id, interns[i].email, interns[i].school, interns[i].role);
    }
    

    file += body2;
    return file
}

function buildManagerList(name, id, email, office, role){
    return `
            <ul class="list-group col-3">
                <li class="list-group-item name ${role}">
                    ${name}
                </li>
                <li class="list-group-item">
                    Role: ${role}
                </li>
                <li class="list-group-item">
                    Employee ID: ${id}
                </li>
                <li class="list-group-item">
                    Email: <a href='https://mail.google.com/mail/u/0/?fs=1&to=${email}&tf=cm'target = '_blank'>${email}</a>
                </li>
                <li class="list-group-item">
                    Office: ${office}
                </li>
            </ul>`
}
function buildEngineerList(name, id, email, github, role){
    return `
            <ul class="list-group col-3">
                <li class="list-group-item name ${role}">
                    ${name}
                </li>
                <li class="list-group-item">
                    Role: ${role}
                </li>
                <li class="list-group-item">
                    Employee ID: ${id}
                </li>
                <li class="list-group-item">
                Email: <a href='https://mail.google.com/mail/u/0/?fs=1&to=${email}&tf=cm'target = '_blank'>${email}</a>
                </li>
                <li class="list-group-item">
                    Github: <a href='https://github.com/${github}'target = '_blank'>${github}</a>
                </li>
            </ul>
    `
}
function buildInternList(name, id, email, school, role){
    return `
            <ul class="list-group col-3">
                <li class="list-group-item name ${role}">
                    ${name}
                </li>
                <li class="list-group-item">
                    Role: ${role}
                </li>
                <li class="list-group-item">
                    Employee ID: ${id}
                </li>
                <li class="list-group-item">
                Email: <a href='https://mail.google.com/mail/u/0/?fs=1&to=${email}&tf=cm'target = '_blank'>${email}</a>
                </li>
                <li class="list-group-item">
                    School: ${school}
                </li>
            </ul>
    `
}

const head = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Your Team</title>
</head>`
const body1 = `
<body>
    <div class="jumbotron">Your Team</div>
    <div class="container">
        <div id = "team-container"class="row">`
const body2 = `
        </div>
    </div>
</body>
</html>
`
module.exports = buildFile;