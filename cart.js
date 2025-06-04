let cart = [];

function addToCart(name, price) {
  price = parseFloat(price);
  
  // Check if item is already in the cart
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

function renderCart(itemsContainerId, totalId) {
  const itemsContainer = document.getElementById(itemsContainerId);
  const totalElement = document.getElementById(totalId);
  itemsContainer.innerHTML = ""; // Clear previous items

  let total = 0;

  cart.forEach(item => {
    const itemElement = document.createElement("li");
    itemElement.className = "flex justify-between items-center border-b pb-2";
    itemElement.innerHTML = `
      <span>${item.name} x ${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
    `;
    itemsContainer.appendChild(itemElement);

    total += item.price * item.quantity;
  });

  totalElement.textContent = `₹${total}`;
}

