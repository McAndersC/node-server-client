import users from "./users.js";

const app = {};

app.init = () => {

    users.read();
    users.create();
    users.update();
    users.delete();

};

app.init();