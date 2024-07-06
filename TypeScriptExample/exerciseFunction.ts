type Product = {
    name: string;
    price: number;
    category: string;
};

let products: Product[] = [
    { name: 'Laptop', price: 50000, category: 'Electronics'},
    { name: 'Shirt', price: 1200, category: 'Apparel'},
    { name: 'Coffee Maker', price: 2500, category: 'Appliances'}
];

//Function
function filterProductByPrice(products:Product[], minPrice:number):Product[] {
    return products.filter(product=>product.price>minPrice);
    
}

//discount
function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price * 0.9}));
}

//Call Function
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//console.log(filterProduct);
console.log(discountProducts);