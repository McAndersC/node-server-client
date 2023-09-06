const productservice = {};
productservice.endpoint = 'http://localhost:3000/product';

// Create Products.
productservice.createProduct = async (elements) => {

    // Destructure the elements object.
    const { title, price, recommended, discountInPercent } = elements;

    // Create a product object.
    let product = {
        title: title.value,
        price: price.value,
        recommended: recommended.cheked,
        discountInPercent: discountInPercent.value
    }

    // Send the product object to the server.
    return fetch(productservice.endpoint, { 
        method: 'POST', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 
    
};

// Read Products
productservice.getProducts = async () => {

    return fetch(productservice.endpoint)
        .then((response) => response.json())

}

// Update Product.
productservice.updateProduct = async (elements) => {

    // Destructure the elements object.
    const { id, title, price, recommended, discountInPercent } = elements;

    // Create a product object.
    let product = {
        _id: id.value,
        title: title.value,
        price: price.value,
        recommended: recommended.cheked,
        discountInPercent: discountInPercent.value,
    }

    console.log(product)

    // Send the product object to the server.
    return fetch(productservice.endpoint, { 
        method: 'PUT', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

// Delete Product.
productservice.deleteProduct = async (elements) => {

    // Destructure the elements object.
    const { id } = elements;

    // Create a user object.
    let product = {
        _id: id.value,
    }

    // Send the user object to the server.
    return fetch(productservice.endpoint, { 
        method: 'DELETE', 
        body: JSON.stringify(product), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};



export default productservice;