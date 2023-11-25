function checkUserLogin() {
    const userLoggedIn = sessionStorage.getItem('userLogged');
    console.log('User logged in status:', userLoggedIn);
    if (userLoggedIn !== 'logged') {
        window.location.href = './login.html';
    }
}