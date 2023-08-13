
const usersDatabase = [
    { username: 'user1', password: 'password1', name: 'John Doe', personalInfo: 'Some info about John' },
    
];

const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const userInfoContainer = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const userPersonalInfo = document.getElementById('user-personal-info');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = usersDatabase.find(user => user.username === username && user.password === password);

    if (user) {
        showUserInfo(user);
    } else {
        alert('Invalid username or password');
    }
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const name = document.getElementById('register-name').value;
    const personalInfo = document.getElementById('register-personal-info').value;

    // Add user to the database
    usersDatabase.push({ username, password, name, personalInfo });
    alert('Registration successful! You can now log in.');
});

function showUserInfo(user) {
    userName.textContent = user.name;
    userPersonalInfo.textContent = user.personalInfo;
    userInfoContainer.classList.remove('hidden');
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
}
