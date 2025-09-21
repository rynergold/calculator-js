const display = document.getElementById('display-input');

function appendToDisplay(element) {
  display.value += element.innerText;
}

function evalOf(){
  try {
    display.value = eval(display.value);
  } catch (error) {
    console.log(`Error: ${error}`);
    display.value = 'Error';
  }
}