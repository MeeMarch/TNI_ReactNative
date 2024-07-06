//การกำหนด enum สำหรับสถานะสินค้า
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out Of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 }
];
function displayProductDetails(productdetail) {
    productdetail.forEach(function (products) {
        console.log("Product: ".concat(products.name, ", Status: ").concat(products.status, ", Price: ").concat(products.price));
    });
} //end of function
displayProductDetails(products);
