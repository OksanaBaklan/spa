// console.log("operation 1");

// window.setTimeout(() => {
//   console.log("operation 2");
// }, 1000);

// console.log("operation 3");

//Example 1
// const myPromise = new Promise((resolve, reject) => {
//   let connection = true;

//   if (connection) {
//     resolve("Coonection Ok!");
//   } else {
//     reject("Connection refused!");
//   }
// });

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is done!");
  });

//Example 2
