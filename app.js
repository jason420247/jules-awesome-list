const addToCartButton = document.getElementById('add-to-cart');
const cart = document.getElementById('cart');

addToCartButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = 'Product';
  cart.appendChild(li);
});
