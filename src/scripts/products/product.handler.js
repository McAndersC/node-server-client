import productservice from "./product.service.js";

// Form handler til Opret Formen
export const productCreateHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const { title, price, recommended, discountInPercent } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
    let product = {
        title: title.value,
        price: price.value,
        recommended: recommended.cheked,
        discountInPercent: discountInPercent.value
    }

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await productservice.createProduct(product);
    
    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;

};

// Form handler til Update Formen
export const productUpdateHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const { id, title, price, recommended, discountInPercent } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
    let product = {
        _id: id.value,
        title: title.value,
        price: price.value,
        recommended: recommended.checked,
        discountInPercent: discountInPercent.value,
    };

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await productservice.updateProduct(product);

    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;
    
};

// Form handler til Delete Formen
export const productDeleteHandler = async (e) => {

    e.preventDefault();

    // Vi "Dekonstruere" et object og tager de felter vi benytter.
    // I dette tilfælde tager vi vores input felter via deres "name" value.

    const { id } = e.currentTarget.elements;

    // Nu opretter vi det object vi vil sende til serveren.
    // Et objekt der har de værdier som vores server Model/Scheme som minimum skal have
    let product = {
        _id: id.value
    };

    // Vi sender objektet til vores produkt service som sørger for kontakten til serveren.
    const result = await productservice.deleteProduct(product);

    // Vi ressetter <form></form> felterne.
    e.target.reset();

    // Aflevere vores resultat.
    return result;

};
