import users from "./users.js";

const app = {};

app.init = () => {

    users.create();
    users.read();
    users.update();
    users.delete();

};

app.init();