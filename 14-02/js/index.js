const headerSix = document.querySelector("h6");
// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().
// NodeTokenList
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
// Node tree https://dom.spec.whatwg.org/#concept-node

console.log("I'm external Js file");
// alert("Hej, you are back finally");
// const userName = prompt("Please enter your name");
console.log(window);
const container = document.querySelector(".container");
console.log(container);
// you can use any other selector here
// like > + ~ and more
const spanList = document.querySelectorAll(".container span");
console.log(spanList);
spanList.forEach((span, i) => {
  console.log(span);
  if (i % 2 === 0) {
    span.style.backgroundColor = "orange";
  }
  // innerHtml will get inside your HTML element
  span.innerHTML = "Hi <br>";
});
// to change one element
spanList[1].style.backgroundColor = "green";
// to get the length aka how many elements
console.log(spanList.length);
// changing classes
const header = document.querySelector(".main");
console.log(header);
// adding new class or many classes to our element
header.classList.add("big", "light");
const classArr = ["classOne", "classTwo"];
// adding more classes using ... op
header.classList.add(...classArr);
// removing class
header.classList.remove("light");
console.log(header.classList);
// viewing all the classes in one element
header.classList.forEach((className) => console.log(className));
// outerHTML
console.log(headerSix);
headerSix.outerHTML = "<li>Hej, It's h2 now</li>";

function themeChange() {
  console.log("I'm been called now");
  const webpageBody = document.querySelector("body");
  const checkboxValue = document.querySelector("#light-dark").checked;
  const displayedText = document.querySelector(".page-style");

  console.log(checkboxValue);
  if (checkboxValue) {
    // dark mood
    // user checked the checkbox
    displayedText.innerHTML = " Dark theme 🌙";
    webpageBody.classList.add("dark");
    webpageBody.classList.remove("light");
  } else {
    // light mood
    // user unchecked the checkbox
    displayedText.innerHTML = " Light theme ☀️";
    webpageBody.classList.add("light");
    webpageBody.classList.remove("dark");
  }
}

// What's been used to build
// Chrome : C++ also with C, Java, Python and JavaScript
// Edge : C++, Java
// Mozilla : C++, JavaScript
// Safari : C++, C
