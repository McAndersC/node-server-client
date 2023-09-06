const userservice = {};
userservice.endpoint = 'http://localhost:3000/user';

// Create Users.
userservice.createUser = async (elements) => {

    // Destructure the elements object.
    const { firstname, surname, email, age, street, zip, username, password } = elements;

    // Create a user object.
    let user = {
        firstname: firstname.value,
        surname: surname.value,
        username: username.value,
        password: password.value,
        email: email.value,
        age: age.value,
        street: street.value,
        zip: zip.value
    }

    // Send the user object to the server.
    return fetch(userservice.endpoint, { 
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

// Read Users
userservice.getUsers = async () => {

    return fetch(userservice.endpoint)
        .then((response) => response.json())

}

// Update Users.
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

// Update Users.
userservice.updateUser = async (elements) => {

    // Destructure the elements object.
    const { firstname, surname, email, age, street, zip, member, username, password } = elements;

    // Create a user object.
    let user = {
        firstname: firstname.value,
        surname: surname.value,
        email: email.value,
        username: username.value,
        password: password.value,
        age: age.value,
        street: street.value,
        zip: zip.value,
        isMember: member.checked
    }

    console.log(user)

    // Send the user object to the server.
    return fetch(userservice.endpoint, { 
        method: 'PUT', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

  
};

export default userservice;