//change font of body
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//styling of title and section
const title = document.querySelector(".title");
title.style.textAlign = "center";

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around";
mainSection.style.boxSizing = "border-box";

//change styling of h2 elements
const menuCategories = document.querySelectorAll(".category");
console.log(menuCategories);
// add comment
menuCategories.forEach(({ style: header }) => {
  header.fontStyle = "italic";
  header.fontSize = "2rem";
  header.borderBottom = "1px solid black";
});

//change font size of warning at bottom of page
let warning = document.getElementById("warning");
warning.style.fontSize = "1.5rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

//color generator
function colorGenerator() {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  // lighter color
  randomColor += "50";
  console.log(randomColor);
  return randomColor;
}

//assigning a random color to each list item
const foodCategories = document.querySelectorAll(".food-category");

foodCategories.forEach(({ style: categoryBox }) => {
  categoryBox.backgroundColor = colorGenerator();
  categoryBox.minWidth = "300px";
  categoryBox.height = "10rem";
  categoryBox.textAlign = "center";
  categoryBox.padding = "1rem";
  categoryBox.borderRadius = "5px";
});

const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(({ style: item }) => {
  item.marginTop = "1rem";
  item.listStyle = "none";
});

// allergies section - add styling
const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

const allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";

const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 === 1) {
    item.backgroundColor = "skyblue";
  }
  item.paddingLeft = "1rem";
  item.lineHeight = "1.75";
});

//footer descriptions
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(({ style }) => {
  style.border = "5px solid orange";
  style.borderRadius = "100%";
  style.height = "7rem";
  style.width = "7rem";
  style.display = "flex";
  style.justifyContent = "center";
  style.alignItems = "center";
  style.margin = "1rem";
});
