const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const userInfo = document.getElementById('user-info');

loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    
    const user = simulateLogin(username, password);
    if (user) {
        displayUserInfo(user.name);
    }
}

function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const name = document.getElementById('register-name').value;
    
    const user = simulateRegister(username, password, name);
    if (user) {
        displayUserInfo(user.name);
    }
}

function simulateLogin(username, password) {
   
    const users = [
        { username: 'user1', password: 'password1', name: 'User One' },
        { username: 'user2', password: 'password2', name: 'User Two' },
    ];
    const user = users.find(u => u.username === username && u.password === password);
    return user;
}

function simulateRegister(username, password, name) {
   
    const newUser = { username, password, name };
    return newUser;
}

function displayUserInfo(name) {
    userInfo.innerHTML = `Welcome, ${name}!`;
}
