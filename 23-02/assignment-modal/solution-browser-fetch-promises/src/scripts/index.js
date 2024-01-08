// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.getElementById("myModal");

let promisOfModal = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(modal);
  }, 4000);
});

promisOfModal
  .then((val) => {
    val.style.display = "block";
  })
  .catch((err) => {
    console.log("Ha-ha-ha", err);
  });

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "modal":
    case "close":
      modal.style.display = "none";
      break;
  }
});
