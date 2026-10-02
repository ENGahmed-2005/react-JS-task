const products = [
  { name: "Laptop", price: 900, rating: 4.5 },
  { name: "Mouse", price: 20, rating: 2.5 },
  { name: "Keyboard", price: 45, rating: 3.4 },
  { name: "Monitor", price: 250, rating: 5 },
  { name: "Headphones", price: 60, rating: 3 },
  { name: "Webcam", price: 80, rating: 4.2 },
];

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  if (product.rating > 3) {
    let stars = "";
    for (let j = 1; j <= Math.floor(product.rating); j++) {
      stars += "⭐";
    }

    document.write(`<p>${product.name} - $${product.price} - ${stars}</p>`);
    console.log(product.name, stars);
  }
}
