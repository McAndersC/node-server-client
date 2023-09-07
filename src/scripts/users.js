import userservice from "./user.service.js";

const users = {};

users.create = () => {

    const form = document.querySelector('#createForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await userservice.createUser(form.elements);
      
            console.log('Create Form Result', result);
           
            form.reset();
        });
    }


};

users.read = async () => {

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
        </tr>`
    }

    const userList = document.querySelector('.user-list');
  
    if(userList)
    {
        let userData = await userservice.getUsers();
        userData.data.forEach( (user) => {
    
            userList.insertAdjacentHTML('beforeend', listTmpl(user))
            
        })

    }
  
};

users.update = async () => {

    const form = document.querySelector('#updateForm');

    // We find the users email in the URL.
    const urlParams = new URLSearchParams(window.location.search);

    // We get the user from the server by email.
    let user = await userservice.getUserByEmail(urlParams.get('email'));

    // We get the first user from the array.
    user = user.data[0];

    if(user)
    {
        // Destructure the elements object.
        const { firstname, surname, email, age, street, zip, member, username, password } = form.elements;

        // We set the value of the form fields.
        firstname.value = user.firstname;
        surname.value = user.surname;
        email.value = user.email;
        age.value = user.age;
        street.value = user.street;
        zip.value = user.zip;
        member.cheked = user.member;
        username.value = user.username;
        password.value = user.password;

    }

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await userservice.updateUser(form.elements);
      
            console.log('Update Form Result', result);
           
            form.reset();
        });
    }


};

users.delete = () => {

    const form = document.querySelector('#deleteForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await userservice.deleteUser(form.elements);
      
            console.log('Delete Form Result', result);
           
            form.reset();
        });
    }


};

export default users;