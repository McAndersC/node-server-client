import userservice from "./user.service.js";

// Create User Handler
export const userCreateHandler = async (e) => {

    e.preventDefault();

    // Destructure the elements object.
    const { firstname, surname, email, age, street, zip, username, password } = e.currentTarget.elements;

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
    const result = await userservice.createUser(user);

    // Reset the form.
    e.target.reset();

    // Return the result.
    return result;
    
};

// Update User Handler
export const userUpdateHandler = async (e) => {

    e.preventDefault();

    // Destructure the elements object.
    const { firstname, surname, email, age, street, zip, isMember, username, password } = e.currentTarget.elements;

    console.log(isMember.checked);

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
        isMember: isMember.checked
    };

    // Send the user object to the server.
    const result = await userservice.updateUser(user);

    // Reset the form.
   // e.target.reset();

    // Return the result.
    return result;
    
};