const products = [
  { name: "Laptop", price: 900, rating: 4.5 },
  { name: "Mouse", price: 20, rating: 2.5 },
  { name: "Keyboard", price: 45, rating: 3.4 },
  { name: "Monitor", price: 250, rating: 5 },
  { name: "Headphones", price: 60, rating: 3 },
  { name: "Webcam", price: 80, rating: 4.2 },
];

products.forEach(function (product){
  
    if (product.rating > 3) {
    let stars = "";
    for (let i = 1; i <= Math.floor(product.rating); i++) {
      stars += "⭐";
    }
    console.log(product.name, stars);
  }
  
})

