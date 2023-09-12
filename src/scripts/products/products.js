import productservice from "./product.service.js";
import { productUpdateHandler, productDeleteHandler, productCreateHandler } from "./product.handler.js";

const products = {};

// Undersøger om en "Create" <form> er tilstede.
products.create = () => {

    const form = document.querySelector('#productCreateForm');

    if(form)
    {
        form.addEventListener('submit', productCreateHandler);
    }


};

// Tjekker om vi der er et <table> med classen "product-list". 
products.list = async () => {

    // Finder Elementet
    const productList = document.querySelector('.product-list');

    // Template for en produt række i vores <table>
    const listTmpl = (product) => {
        return `<tr>
            <td>${product._id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.recommended}</td>
            <td>${product.discountInPercent}</td>
            <td>
                <a href="/products/update.html?id=${product._id}">UPD</a>
                <a href="/products/delete.html?id=${product._id}">DEL</a>
            </td>
        </tr>`
    }


    // Hvis listen er tilstede henter vi alle brugere og skriver dem i listen.
    if(productList)
    {
        // Henter produkter.
        let productData = await productservice.getProducts();

        // Looper over alle produkter og indsætter HTML templaten.
        // Altid som det sidste elemnent lige før </table> slutter "beforeend".
        productData.data.forEach( (product) => {
    
            productList.insertAdjacentHTML('beforeend', listTmpl(product))
            
        })

    }

    return true;
  
};

// Tjekker om vi der er en Update <form> tilstede.
products.update = async () => {

    const form = document.querySelector('#productUpdateForm');

    // Hvis der er en <form></form> på siden med id = "productUpdateForm"
    // Så har vi en produkt UPDATE form

    if(form)
    {

        // Så undersøger vi om der er en Id adresse med i URL´en
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Hvis der er en ID med, så skal vi opdatere vi formen.
        if(id) {

            // We get the user from the server by email.
            let product = await productservice.getProductById(id);
           
            // Vi trækker det første og eneste PRODUCT ud af vores result.data object.
            // Husk at vi fra vores server sender {message: '', data:[]} og vi modtager
            // reponset med vores resultater i .data. Og her tager vi det første [0]
            // Element i Array´et.
            product = product.data[0];
         
            // Hvis vi har et "product" og ikke et tomt resultat i .data.
            // Så udfylder vi formularen med værdierne fra det produkt vi har fundet.
            if(product)
            {
                form.elements['id'].value = product._id;            
                form.elements['title'].value = product.title;            
                form.elements['price'].value = product.price;            
                form.elements['recommended'].checked = product.recommended;            
                form.elements['discountInPercent'].value = product.discountInPercent;            
            }
        }

        // Tilføjer en Event Lytter på "submit" fra formen.
        form.addEventListener('submit', productUpdateHandler)

    }

};

// Tjekker om vi der er en Delete <form> tilstede.
products.delete = async () => {

    const form = document.querySelector('#porductDeleteForm');

    // Hvis der er en <form></form> på siden med id = "porductDeleteForm"
    // Så har vi en produkt DELTE form

    if(form)
    {
        // Så tjekker vi om der er en Id med i URL´en
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Hvis der er en ID med, så skal vi opdatere vi formen.
        if(id) {

            // We get the user from the server by email.
            let product = await productservice.getProductById(id);
            
            // Vi trække den første og eneste PRODUCT ud af vores result.data object.
            // Husk at vi fra vores server sender {message: '', data:[]} og vi modtager
            // reponset med vores resultater i .data. Og her tager vi det første [0]
            // Element i Array´et.
            product = product.data[0];
            
            // Hvis vi har et produkt og ikke et tomt resultat i .data.
            // Så udfylder vi formularen med værdierne fra den bruger vi har fundet.
            if(product)
            {
                form.elements['id'].value = product._id;                       
            }
        }

        // Tilføjer en Event Lytter på "submit" fra formen.
        form.addEventListener('submit', productDeleteHandler);
    }

};


export default products;
