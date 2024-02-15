function calculateFunctionArea() {
  const TriangleBase = document.getElementById("TriangleBaseInput");
  const TriangleBaseText = TriangleBase.value;
  const Base = parseFloat(TriangleBaseText);

  const TriangleHeight = document.getElementById("TriangleHeightInput");
  const TriangleHeightText = TriangleHeight.value;
  const height = parseFloat(TriangleHeightText);

  // Triangle area
  const triangleArea = document.getElementById("TriangleArea");

  triangleArea.innerText = 0.5 * Base * height;
}
