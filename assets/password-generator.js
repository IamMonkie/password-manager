// variables
const charLimitRange = document.getElementById("charLimitRange");
const charLimitNumber = document.getElementById("charLimitNumber");
const form = document.getElementById("passwordGeneratorForm");
const upperCaseElement = document.getElementById("includeUpperCase");
const symbolsElement = document.getElementById("includeSymbols");
const numbersElement = document.getElementById("includeNumbers");

// event listeners
charLimitNumber.addEventListener("input", syncCharacterAmount);
charLimitRange.addEventListener("input", syncCharacterAmount);
form.addEventListener("submit", e => {
  e.preventDefault();
  const syncCharacterLimit = charLimitNumber.value;

  // checkboxes
  const upperCaseCheck = upperCaseElement.checked;

  const symbolsCheck = symbolsElement.checked;

  const numbersCheck = numbersElement.checked;

  const password = generatePassword(
    syncCharacterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});

// functions
function syncCharacterAmount(e) {
  const value = e.target.value;
  charLimitNumber.value = value;
  charLimitRange.value = value;
}
