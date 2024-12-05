const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'error';
  }
}
function clearDisplay() {
  display.value = '';
}