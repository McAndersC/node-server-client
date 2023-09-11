import users from "./users/users.js";
import products from "./products.js";

const app = {};

app.init = () => {

    users.create();
    users.read();
    users.update();
    users.delete();

    products.create();
    products.read();
    products.update();
    products.delete();

};

app.init();