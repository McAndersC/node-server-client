const userservice = {};
userservice.endpoint = 'http://localhost:3000/user/';
userservice.endpointUsers = 'http://localhost:3000/users/';

// Create User.
userservice.createUser = async (user) => {



    // Send the user object to the server.
    return fetch(userservice.endpoint, { 
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

// Read Users
userservice.getUsers = async () => {

    return fetch(userservice.endpointUsers)
        .then((response) => response.json())

}

// Read Users
userservice.getUserByEmail = async (email) => {

    return fetch(userservice.endpoint + email)
        .then((response) => response.json())

}

// Update User.
userservice.updateUser = async (user) => {

    // Send the user object to the server.
    return fetch(userservice.endpoint, { 
        method: 'PUT', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

// Delete User.
userservice.deleteUser = async (elements) => {

    // Destructure the elements object.
    const { email } = elements;

    // Create a user object.
    let user = {
        email: email.value,
    }

    // Send the user object to the server.
    return fetch(userservice.endpoint, { 
        method: 'DELETE', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

export default userservice;