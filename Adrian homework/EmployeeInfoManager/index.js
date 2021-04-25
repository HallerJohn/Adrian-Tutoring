const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const buildFile = require('./src/htmlBuilder');

main();

async function main(){
  var engineers = [];
  var interns = [];
  var manager;

  manager = await addManager();

  do{
    var repeat = true;
    var task = await promptTask();
    switch (task.task){
      case 'Add an engineer': {
        engineers.push(await addEngineer());
        break;
      }
      case 'Add an intern': {
        interns.push(await addIntern());
        break;
      }
      case 'Done making my team': {
        repeat = false;
      }
    }
  } while (repeat);

  createFile(manager, engineers, interns);
}

function createFile(manager, engineers, interns){
  fs.writeFile('./dist/myTeam.html', buildFile(manager, engineers, interns), function(err){
    if (err) {
      throw err;
    }
  });
}

async function addManager(){
  var ans = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the team manager'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the id of the team manager'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email address of the team manager'
    },
    {
      type: 'input',
      name: 'office',
      message: 'Please enter the office number of the team manager'
    }
  ])
  return new Manager(ans.name, ans.id, ans.email, ans.office);
}

async function promptTask(){
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: [
        'Add an engineer',
        'Add an intern',
        'Done making my team'
      ]
    }
  ])
}

async function addEngineer(){
  var ans = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the Engineer'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the id of the Engineer'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email address of the Engineer'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the github account of the Engineer'
    }
  ])
  return new Engineer(ans.name, ans.id, ans.email, ans.github);
}

async function addIntern(){
  var ans = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the Intern'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the id of the Intern'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email address of the Intern'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the school the Intern is attending'
    }
  ])
  return new Intern(ans.name, ans.id, ans.email, ans.school);
}