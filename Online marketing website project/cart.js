document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Add the product to the cart (your existing logic)
        const productId = this.dataset.productId;
        addToCart(productId); // Assuming you have a function to handle adding to cart

        // Redirect to the cart page
        window.location.href = 'cart.html';
    });
});

// Example function to handle adding to cart
function addToCart(productId) {
    // Your logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
}