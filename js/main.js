function doStartupConfig() {
    checkUserLogin();
    createTable();
}

function checkUserLogin() {
    const userLoggedIn = sessionStorage.getItem('userLogged');
    console.log('User logged in status:', userLoggedIn);
    if (userLoggedIn !== 'logged') {
        window.location.href = ('./login.html');
    }
}

const employeesArr = [
    {
       name: 'Alex',
       age: '28',
       project: null, 
       birthdate: '1995-01-10',
       hired: '2020-10-05',
       phone: '0743282329',
       email: 'alex@icloud.com'
    },
    {
        name: 'radu',
        age: '25',
        project: null, 
        birthdate: '1998-01-10',
        hired: '2020-11-05',
        phone: '0747282329',
        email: 'radu@icloud.com'
     },
     {
        name: 'Mada',
        age: '24',
        project: null, 
        birthdate: '1999-01-11',
        hired: '2023-10-05',
        phone: '0743265329',
        email: 'Mada@icloud.com'
     }
];

function createTable() {
    const table = document.getElementById('employees_table');

    let tableStr = '<tr><th>No.</th><th>Name</th><th>Project</th><th>Birthdate</th><th>Hired at</th><th>Phone</th><th>Email</th></tr>';
     
     employeesArr.forEach((person, i) => {
        tableStr += createRow(person, i);

     });

     console.log(tableStr);

     table.innerHTML = tableStr;

}

function createRow(person, i) {
    const rowIndex = i + 1;
    let rowStr = '<tr>';
    rowStr += '<td>' + rowIndex + '</td>';
    rowStr += '<td>' + person.name + '</td>';
    rowStr += '<td>' + person.project + '</td>';
    rowStr += '<td>' + person.birthdate + '</td>';
    rowStr += '<td>' + person.hired + '</td>';
    rowStr += '<td>' + person.phone + '</td>';
    rowStr += '<td>' + person.email + '</td>';
    rowStr += '</tr>';
    return rowStr;
}