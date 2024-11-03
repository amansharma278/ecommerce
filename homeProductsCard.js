
const productContainer = document.querySelector(".productContainer")
const productTemplate = document.querySelector(".products")
export const showProductContainer =(product) =>{
    if(!product){
        return false
    }

    product.forEach(element => {
        const {id, name,category,brand,price,stock,image,discription } = element
        const productClone = document.importNode(productTemplate.content,true)

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".imageSrc").src = image;
        productClone.querySelector(".imageSrc").alt = name;

        productContainer.append(productClone);
        
    });

   

};