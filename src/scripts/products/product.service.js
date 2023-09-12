const productservice = {};
productservice.endpoint = {
    product : 'http://localhost:3000/product/',
}

// Opret Produkt
productservice.createProduct = async (product) => {

    // Send the product object to the server.
    return fetch(productservice.endpoint.product, { 
        method: 'POST', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

// Hent Alle produkter
productservice.getProducts = async () => {

    return fetch(productservice.endpoint.product)
        .then((response) => response.json())

}

// Opdatér et produkt, vi modtager "product" fra vores formHandler 
// og sender det til serveren.
productservice.updateProduct = async (product) => {

    // Send the product object to the server.
    return fetch(productservice.endpoint.product, { 
        method: 'PUT', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

// Henter et produkt ved at benytte id´et som indentifikation
productservice.getProductById = async (id) => {

    return fetch(productservice.endpoint.product + id)
        .then((response) => response.json())

}

// Slet et Product.
productservice.deleteProduct = async (product) => {

    // Send the user object to the server.
    return fetch(productservice.endpoint.product, { 
        method: 'DELETE', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};


export default productservice;