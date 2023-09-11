import { userCreateHandler, userUpdateHandler } from "./user.handlers.js";
import userservice from "./user.service.js";

const users = {};

users.create = () => {

    const form = document.querySelector('#createForm');
    
    if(form)
    {
        form.addEventListener('submit', (e) => userCreateHandler(e));
    }

};

users.read = async () => {

    const listTmpl = (user) => {
        return `<tr>
            <td><a href="/users/update.html?email=${user.email}">${user.firstname}</a></td>
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
    const email = urlParams.get('email');

    if(email)
    {
        // We get the user from the server by email.
        let user = await userservice.getUserByEmail(email);

        // We get the first user from the array.
        user = user.data[0];

        if(user)
        {
            for (const key in user) {
              
                if(form.elements[key]) {
                    console.log('Løber og alle KEYs i vores object', key, user, user[key], form.elements[key].value, typeof user[key])
                    
                    if(typeof user[key] === 'boolean') {
                        form.elements[key].checked = user[key];
                    }
                    else {   
                        form.elements[key].value = user[key];
                    }
                }
            }

        }
    }
  

    if(form)
    {
        form.addEventListener('submit', (e) => userUpdateHandler(e));
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