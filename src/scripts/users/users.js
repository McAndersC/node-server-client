import { userCreateHandler, userUpdateHandler, userDeleteHandler } from "./user.handlers.js";
import userservice from "./user.service.js";

const users = {};

// Undersøger om en "Create" <form> er tilstede.
users.create = () => {

    const form = document.querySelector('#createForm');
    
    if(form)
    {
        form.addEventListener('submit', userCreateHandler);
    }

};

users.list = async () => {

    // Finder Elementet
    const userList = document.querySelector('.user-list');

     // Template for en user række <tr></tr> i vores <table>
    const listTmpl = (user) => {
        return `<tr>
            <td>${user.firstname}</td>
            <td>${user.surname}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.age}</td>
            <td>${user.street}</td>
            <td>${user.zip}</td>
            <td>${user.isMember}</td>
            <td>
                <a href="/users/update.html?email=${user.email}">UPD</a>
                <a href="/users/delete.html?email=${user.email}">DEL</a>
            </td>
        </tr>`
    }

    // Hvis listen er tilstede henter vi alle brugere og skriver dem i listen.
    if(userList)
    {
        // Henter brugere.
        let userData = await userservice.getUsers();

        // Looper over alle brugere og indsætter HTML templaten.
        // Altid som det sidste elemnent lige før </table> slutter "beforeend".
        userData.data.forEach( (user) => {
    
            userList.insertAdjacentHTML('beforeend', listTmpl(user))
            
        })

    }
  
};

users.update = async () => {

    const form = document.querySelector('#updateForm');

    // Hvis der er en <form></form> på siden med id = "updateForm"
    // Så er vi på User Update siden.

    if(form)
    {

        // Så undersøger vi om der er en Email adresse med i URL´en
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');

        // Hvis der er en email med, så skal vi opdatere vi formen.

        if(email)
        {
            // Så vi henter vores brugers oplysninger med den email vi fandt i urlen.
            let user = await userservice.getUserByEmail(email);

            // Vi trækker det første og eneste USER ud af vores result.data object.
            user = user.data[0];

            // Hvis vi finder en user så opdatere vi form elementerne.
            if(user)
            {
                form.elements['email'].value = user.email;            
                form.elements['firstname'].value = user.firstname;            
                form.elements['surname'].value = user.surname;            
                form.elements['username'].value = user.username;            
                form.elements['password'].value = user.password;            
                form.elements['age'].value = user.age;            
                form.elements['street'].value = user.street;     
                form.elements['zip'].value = user.zip;     
                form.elements['isMember'].checked = user.isMember;
            }
        }
  
        // Sender formen når der bliver trykket på submit.
        // "userUpdateHandler" - trækker værdierne fra formen og sender til serveren.
        form.addEventListener('submit', (e) => userUpdateHandler(e));


    }


};

users.delete = async () => {

    const form = document.querySelector('#deleteForm');

    // Hvis der er en <form></form> på siden med id = "porductDeleteForm"
    // Så har vi en produkt DELTE form
    
  

    if(form)
    {
        // Så undersøger vi om der er en email adresse med i URL´en
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');

         // Hvis der er en EMAIL med, så skal vi opdatere vi formen.
        if(email)
        {
            // We henter brugeren fra serveren ved hjælp af emailen.
            let user = await userservice.getUserByEmail(email);

            // Vi trække den første og eneste USER ud af vores result.data object.
            // Husk at vi fra vores server sender {message: '', data:[]} og vi modtager
            // reponset med vores resultater i .data. Og her tager vi det første [0]
            // Element i Array´et.
            user = user.data[0];

            // Hvis vi har en "user" og ikke et tomt resultat i .data.
            // Så udfylder vi formularen med værdierne fra den bruger vi har fundet.
            if(user)
            {
                form.elements['email'].value = user.email;   

            }
        }

        // Tilføjer en Event Lytter på "submit" fra formen.
        form.addEventListener('submit', async (e) => userDeleteHandler(e));
    }

};

export default users;