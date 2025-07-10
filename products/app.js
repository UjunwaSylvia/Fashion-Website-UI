document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { title: "Spread Collar Shirt", price: 48.99, rating: 5.0 },
    { title: "White Solid Format Shirt", price: 39.0, rating: 4.9 },
    { title: "Shine On Me Blouse", price: 42.99, rating: 4.8 },
    { title: "Gray Solid Padded Jacket", price: 32.99, rating: 4.7 },
    { title: "Printed Loose T-shirt", price: 39.99, rating: 5.0 },
    { title: "Summer Wind Crop Shirt", price: 39.95, rating: 4.7 },
    { title: "Tailored Jacket", price: 46.0, rating: 4.9 },
    { title: "Solid Round Neck T-shirt", price: 36.0, rating: 5.0 },
  ];

  const container = document.getElementById("productsContainer");

  const placeholderImages = [
    "/images/Frame.png",
    "/images/img.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img5.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img8.png",
  ];

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    let starsHTML = "";

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHTML += "★";
      } else if (i === fullStars && hasHalfStar) {
        starsHTML += "½";
      } else {
        starsHTML += "☆";
      }
    }

    productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${
                      placeholderImages[index]
                    }')"></div>
                      <div class="product-info">
      <h3 class="product-title">${product.title}</h3>
      <div class="product-meta">
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <span class="divider"></span>
        <div class="product-rating">
          <span class="rating-value">${product.rating}</span>
          <span class="star">★</span>
        </div>
      </div>
    </div>
                `;
 

    container.appendChild(productCard);
  });
});
