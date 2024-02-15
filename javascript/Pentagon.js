function calculatePentagonArea() {
  const base = getInputValue("PentagonD1Input");
  const height = getInputValue("PentagonD2Input");

  const area = 0.5 * base * height;
  setInnerValue("PentagonArea", area);
}
