// Version 1: Basic login
function login(username, password) {
    if (username && password) {
        return "Login successful";
    }
    return "Invalid username or password";
}

module.exports = login;