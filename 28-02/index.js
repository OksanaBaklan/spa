// function myFunction() {
//   const message = document.getElementById("p01");
//   message.innerHTML = "";

//   let number = document.getElementById("demo").value;

//   try {
//     if (number === "") throw "empty";
//     if (isNaN(number)) throw "not a number";
//     if (number < 5) throw "too low";
//     if (number > 10) throw "too high";
//   } catch (error) {
//     message.innerHTML = "Input is " + error;
//   }
// }

function myFunction() {
  fetch("https://api.github.com/users/manishmshiva")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
