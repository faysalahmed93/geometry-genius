function calculateEllipseArea() {
  const base = getInputValue("EllipseAInput");
  const height = getInputValue("EllipseBInput");

  const area = 3.1416 * base * height;
  setInnerValue("ParallelogramArea", area);
}
