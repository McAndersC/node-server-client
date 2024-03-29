import userservice from "./user.service.js";

// Form handler til Opret Formen
export const userCreateHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const { firstname, surname, email, age, street, zip, username, password } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
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

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await userservice.createUser(user);

    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;
    
};

// Form handler til Update Formen
export const userUpdateHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const { firstname, surname, email, age, street, zip, isMember, username, password } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
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

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await userservice.updateUser(user);

    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;
    
};

// Form handler til Delete Formen
export const userDeleteHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const {  email } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
    let user = {
        email: email.value,
    };

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await userservice.deleteUser(user);

    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;
}