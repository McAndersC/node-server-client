const userservice = {};

userservice.endpoint = {
    user : 'http://localhost:3000/user/',
    users : 'http://localhost:3000/users/',
}

// Opret Bruger.
userservice.createUser = async (user) => {

    // Send the user object to the server.
    return fetch(userservice.endpoint.user, { 
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

// Hent Alle brugere.
userservice.getUsers = async () => {

    return fetch(userservice.endpoint.users)
        .then((response) => response.json())

}

// Hent en bruger ved at benytte email´en som indentifikation.
userservice.getUserByEmail = async (email) => {

    return fetch(userservice.endpoint.user + email)
        .then((response) => response.json())

}

// Opdatér en bruger, vi modtager "bruger" fra vores formHandler 
// og sender det til serveren.
userservice.updateUser = async (user) => {

    return fetch(userservice.endpoint.user, { 
        method: 'PUT', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

// Slet en Bruger.
userservice.deleteUser = async (user) => {

    return fetch(userservice.endpoint.user, { 
        method: 'DELETE', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

export default userservice;