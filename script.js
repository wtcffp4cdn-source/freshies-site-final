function addToCart(productName) {
  alert(productName + " added to cart! 🛒");
}

function submitCustomOrder(event) {
  event.preventDefault();
  const name = document.getElementById("customName").value;
  const scent = document.getElementById("customScent").value;
  alert(`Custom order submitted!\nName: ${name}\nScent: ${scent}`);
}
