function calculatePentagonArea() {
  const base = getInputValue("PentagonD1Input");
  const height = getInputValue("EllipseBInput");

  const area = 0.5 * base * height;
  setInnerValue("ParallelogramArea", area);
}
