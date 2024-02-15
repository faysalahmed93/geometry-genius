function calculateRectangleArea() {
  const width = getInputValue("RectangleWidthInput");
  const length = getInputValue("RectangleLengthInput");

  const area = width * length;
  setInnerValue("RectangleArea", area);
}

function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
function setInnerValue(SetInnerId, area) {
  const element = document.getElementById(SetInnerId);
  element.innerText = area;
}
