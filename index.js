// Example event listener for a circle calculation button
const circleButton = document.getElementById('circle-calculate-button');
circleButton.addEventListener('click', () => {
  const radius = parseFloat(document.getElementById('circle-radius').value);
  const result = calculateCircleArea(radius);
  document.getElementById('circle-result').textContent = `The area of the circle is: ${result}`;
});
