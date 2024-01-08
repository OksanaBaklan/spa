import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");

function promiseOfModal() {
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve(modal);
    }, 4000);
  });
}

// let promiseOfModal = new Promise(function (resolve) {
//   window.setTimeout(function () {
//     resolve(modal);
//   }, 4000);
// });

async function getModal() {
  let val = await promiseOfModal(); // 4sek.
  val.style.display = "block"; // this line will execute in 4 secs.
}

getModal();

// promiseOfModal.then(function (val) {
//   val.style.display = "block";
// });

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

//animation end
function onAnimationStart(elem) {
  return new Promise((resolve) => {
    elem.addEventListener("animationend", () => {
      resolve(elem);
    });
  });
}

const continueButton = document.getElementById("continue");

async function onAnimationComplete() {
  const buttonAnimationEnd = await onAnimationStart(continueButton);
  buttonAnimationEnd.classList.add("btn-info");
  alert("Continue to subscription!");
}

continueButton.addEventListener("mouseover", () => {
  onAnimationComplete();
});
