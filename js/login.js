function checkUserPass() {
     const username = document.getElementById('username').value; 
     const password = document.getElementById('password').value; 

     if (username === 'Valentin' && password === 'cascaval') {
        document.getElementById('try_succes').style.display = 'block';
        document.getElementById('try_error').style.display = 'none';

        sessionStorage.setItem('userLogged', 'logged');
        window.location.href = './index.html';
}      else {
        document.getElementById('try_succes').style.display = 'none';
        document.getElementById('try_error').style.display = 'block';
      }
}

function checkLoggedInUser() {
    const userLoggedIn = sessionStorage.getItem('userLogged');
    console.log('User logged in status:', userLoggedIn);
    if (userLoggedIn === 'logged') {
        window.location.href = './index.html';
    }
}