function calculateParallelogramArea() {
  const base = getInputValue("ParallelogramBaseInput");
  const height = getInputValue("ParallelogramHeightInput");

  const area = base * height;
  setInnerValue("ParallelogramArea", area);
}
