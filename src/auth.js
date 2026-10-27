// Version 2: Login with OAuth2
function login(username, password) {
    if (username && password) {
        return "OAuth2 login successful";
    }
    return "Authentication failed";
}

module.exports = login;