// Get the input fields
const rangeSlider = document.querySelector("#amount");
const loanAmountInput = document.querySelector("#amountText");
const settlementInput = document.querySelector("#settlement");
const paymentDateInput = document.querySelector("#paymentdate");

// add an event listener to the range slider to update the loan amount input box
rangeSlider.addEventListener("input", () => {
  loanAmountInput.value = rangeSlider.value;

  // Calculate the settlement value
  const settlementValue =
    parseInt(loanAmountInput.value) + 0.24 * parseInt(loanAmountInput.value);

  // Display the settlement value in the input field
  settlementInput.value = settlementValue.toFixed(2);

  // Calculate the payment date
  const today = new Date();
  const paymentDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const paymentDateString = paymentDate.toISOString().substring(0, 10);

  // Display the payment date in the input field
  paymentDateInput.value = paymentDateString;
});
