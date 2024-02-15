function calculateRhombusArea() {
  const base = getInputValue("RhombusBaseInput");
  const height = getInputValue("RhombusheightInput");

  const area = base * height;
  setInnerValue("RhombusArea", area);
}
