import productservice from "./product.service.js";

const products = {};

products.create = () => {

    const form = document.querySelector('#productCreateForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await productservice.createProduct(form.elements);
      
            console.log('Product Create Form Result', result);
           
            form.reset();
        });
    }


};

products.read = async () => {

    const listTmpl = (product) => {
        return `<tr>
            <td>${product._id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.recommended}</td>
            <td>${product.discountInPercent}</td>
        </tr>`
    }

    const productList = document.querySelector('.product-list');
  
    if(productList)
    {
        let productData = await productservice.getProducts();
        productData.data.forEach( (product) => {
    
            productList.insertAdjacentHTML('beforeend', listTmpl(product))
            
        })

    }
  
};

products.update = () => {

    const form = document.querySelector('#productUpdateForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await productservice.updateProduct(form.elements);
      
            console.log('Product Update Form Result', result);
           
            form.reset();
        });
    }


};

products.delete = () => {

    const form = document.querySelector('#porductDeleteForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await productservice.deleteProduct(form.elements);
      
            console.log('Product Delete Form Result', result);
           
            form.reset();
        });
    }


};


export default products;
