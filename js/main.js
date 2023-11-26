function checkUserLogin() {
    const userLoggedIn = sessionStorage.getItem('userLogged');
    console.log('User logged in status:', userLoggedIn);
    if (userLoggedIn !== 'logged') {
        window.location.href = './login.html';
    }
}

const employeesArr = [
    {
       name: 'Alex',
       age: '28',
       project: null, 
       birthdate: '1995-01-10',
       date_emp: '2020-10-05',
       phone: '0743282329',
       email: 'alex@icloud.com'
    },
    {
        name: 'radu',
        age: '25',
        project: null, 
        birthdate: '1998-01-10',
        date_emp: '2020-11-05',
        phone: '0747282329',
        email: 'radu@icloud.com'
     },
     {
        name: 'Mada',
        age: '24',
        project: null, 
        birthdate: '1999-01-11',
        date_emp: '2023-10-05',
        phone: '0743265329',
        email: 'Mada@icloud.com'
     },
    

];