// Get modal element
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');

// Function to open modal
function openModal(product) {
    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = `R${product.price.toFixed(2)}`;
    modal.style.display = 'flex';
}

// Function to close modal
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Click outside the modal to close
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Example of how to use openModal (replace this with actual product data)
const products = document.querySelectorAll('.product-card');
products.forEach(product => {
    product.addEventListener('click', () => {
        const productData = {
            title: product.querySelector('h3').textContent,
            image: product.querySelector('img').src,
            description: product.querySelector('.description').textContent,
            price: parseFloat(product.querySelector('.price').textContent.replace('R', ''))
        };
        openModal(productData);
    });
});
