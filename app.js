// clear value from the result box
const DeleteMe = () => {
  document.getElementById("MyResult").value = "";
};

// click number button and showing result
const calculator = (valuepass) => {
  document.getElementById("MyResult").value += valuepass;
};

// calculate number using eval function
const Answer = () => {
  let a = eval(document.getElementById("MyResult").value);
  document.getElementById("MyResult").value = a;
};
