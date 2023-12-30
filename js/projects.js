function doStartupConfig() {
    checkUserLogin();
    //createTable();
}

function checkUserLogin() {
    const userLoggedIn = sessionStorage.getItem('userLogged');
    console.log('User logged in status:', userLoggedIn);
    if (userLoggedIn !== 'logged') {
        window.location.href = ('./login.html');
    }
}

function displayAddForm() {
    document.getElementById('add_form_container').style.display = 'block';
    document.getElementById('add_container').style.display = 'none';

    document.getElementById('add_button').style.display = 'inline-block';
    document.getElementById('edit_button').style.display = 'none';

    //const validationKeys = Object.keys(validationObj);
    //validationKeys.forEach(key => {
        //validationObj[key] = false;
    //})
    //checkValidationObj();
}

function checkName() {
    const name_el = document.getElementById('name');
    const name = name_el.value;

    
    if(name === '' || name === null) {
        document.getElementById('name_err').style.display = 'block';
        name_el.classList.add('input_err');
        //validationObj.name = false;
    } else {
        document.getElementById('name_err').style.display = 'none';
        name_el.classList.remove('input_err');
        //validationObj.name = true;
    
   }
   checkValidationObj();
}

