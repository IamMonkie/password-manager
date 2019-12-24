// variables
const charLimitRange = document.getElementById("charLimitRange");
const charLimitNumber = document.getElementById("charLimitNumber");

// event listeners
charLimitNumber.addEventListener("input", syncCharacterAmount);
charLimitRange.addEventListener("input", syncCharacterAmount);

// functions
function syncCharacterAmount(e) {
  const value = e.target.value;
  charLimitNumber.value = value;
  charLimitRange.value = value;
}
