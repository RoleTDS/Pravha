// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
  const qtyInputs = document.querySelectorAll(".cart-actions input");
  const totalDisplay = document.querySelector("#cart-total");

  // Prices for each box in same order as inputs
  const prices = [1499, 2999, 4999];

  function updateTotal() {
    let total = 0;
    qtyInputs.forEach((input, index) => {
      total += parseInt(input.value) * prices[index];
    });
    totalDisplay.textContent = `₹${total.toLocaleString()}`;
  }

  // Update total whenever a quantity changes
  qtyInputs.forEach(input => {
    input.addEventListener("input", updateTotal);
  });

  // Initialize total on load
  updateTotal();
});
