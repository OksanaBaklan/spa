# `08` A real component

## Bootstrap is already linked , so no need to include it in index.html

``` `const cardData = {
  imagePath : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
  cardTitle: "Bob Dylan",
  cardText: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  cardLink: "https://en.wikipedia.org/wiki/Bob_Dylan",
  linkTitle: "Go to wikipedia"
}`
- Create Card Component and export it
- Pass the above `cardData` object as props to Card
- Import Card Component in App.js and pass props to it
- Use that props in Card Component to render the card.

Now let's create another component (function) called **"Card"** that outputs the following HTML:

```jsx
<div class="card m-5">
  <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Bob Dylan</h5>
    <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
```

:point_up: This HTML code is based on the [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/).

# :speech_balloon: Instructions

Write your code in `src/index.js`

- Please create a function named `Card` that returns the card code and use the ReactDOM.render function with `<Card />` argument to add it into the website inside `#root`.

Note: if you don't know or remember how to use `ReactDOM.render` you can review the past exercises.