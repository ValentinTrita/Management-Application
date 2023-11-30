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
    const projectName = person.project ? person.project : '-';
    let rowStr = '<tr>';
    rowStr += '<td>' + rowIndex + '</td>';
    rowStr += '<td>' + person.name + '</td>';
    rowStr += '<td>' + projectName + '</td>';
    rowStr += '<td>' + person.birthdate + '</td>';
    rowStr += '<td>' + person.hired + '</td>';
    rowStr += '<td>' + person.phone + '</td>';
    rowStr += '<td>' + person.email + '</td>';
    rowStr += '</tr>';
    return rowStr;
}
function displayAddForm() {
    document.getElementById('add_form_container').style.display = 'block';
    document.getElementById('add_container').style.display = 'none';
}
    function cancelAddForm() {
        const userConfirm = confirm('Are you sure you want to cancel? ')

        if (userConfirm) {
            document.getElementById('add_form').reset();
            document.getElementById('add_form_container').style.display = 'none';
            document.getElementById('add_container').style.display = 'block';
        }
    }

    function addNewUser() {
        console.log('adding...');
    }

    function checkName() {
        const name_el = document.getElementById('name');
        const name = name_el.value;
        console.log('value', name);
        if(name === '' || name === null) {
            document.getElementById('name_err').style.display = 'block';
            name_el.classList.add('input_err');
        } else {
            document.getElementById('name_err').style.display = 'none';
            name_el.classList.remove('input_err');
        
       }
    }

    function checkAge() {
        const age_el = document.getElementById('age');
        const age = age_el.value;

       
        if(age !== '' && !isNaN(age) && age >= 18 && age <= 65) {
            document.getElementById('age_err').style.display = 'none';
            age_el.classList.remove('input_err');        
        } else {
            document.getElementById('age_err').style.display = 'block';
            age_el.classList.remove('input_err'); 
        
       }
    }
        function checkElement(element) {
         const html_el = document.getElementById(element);
         const el_value = html_el.value;

         let patt;

         if (element === 'birthdate') {
            patt = /^\d{4}-\d{2}-\d{2}$/g;

         } else if (element === 'phone') {
            patt = /^07\d{8}/g;
         } else if (element === 'email') {
            patt = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/g;
         }

         //^\d{4}-\d{2}-\d{2}$/g;

         if(el_value === '' ||  !patt.test(el_value)) {
            document.getElementById(element + '_err').style.display = 'block';
            html_el.classList.add('input_err');
        } else {
            document.getElementById(element + '_err').style.display = 'none';
            html_el.classList.remove('input_err');
        
       }
    }
