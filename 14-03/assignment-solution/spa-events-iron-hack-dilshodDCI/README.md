
## Exercise

##### Task 1.
Using the npm package [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) create new project named `react-state-example`.

Inside of the `src` directory create a new directory `components` to store your new components.
Create file `src/components/User.js` and update the `src/App.js`, as per the code in this gist.

##### Task 2.
Create an initial `state` of the root component (`App.js`) using `useState()` hook:

```
const [details, setDetails] = useState({
    clickCount: 0,
    backColor: "yellow",
    bootcamp: "Ironhack",
  })
  ```

Pass this value as the prop and display it in an additional `<h2>` tag in the `<User />` component so that it says : 'Welcome to Ironhack'

##### Task 3.
Add `clickHandler()` function in root component `App.js`, to change `state` property `backColor` to a random color every 5 clicks. For this create a `colorMapper` function and use it to get the HEX color string:

```
{
...
   backColor: colorMapper(),
...
}
```

##### Task 4.
Create a new component `Navbar.js`, which has a `state` with one property `username: 'YOUR NAME'`.
Display this value in the `<p>` tag which will be showing in the navbar. When you click on `<p>` tag, it should change to your name.
You can use the below snippet for your component elements.
When done, `import` the `Navbar` component in `App.js` component and place it as the first element so that it displays on the top of the page.

```js
// Navbar.js
   <nav id='navbar'>
     <ul>
       <a href="#"><li>Home</li></a>
       <a href="#"><li>Contact</li></a>
       <a href="#"><li>About</li></a>
     </ul>

     <div className="nav-details">
       <p className="nav-username"> Bob </p>
     </div>
```


```css
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  #352275;
  padding: 0px 40px;
}

#navbar li {
  list-style: none;
  display: inline-block;
  margin: 0px 40px; 
  font-size: 22px;
  color:white;
}

div.nav-details > * {
  display: inline-block;
  color: royalblue;
  font-size: 22px;
}
```



<br>

## Additional resources

<br>

[DOM Events in React -  reactjs.org](https://reactjs.org/docs/events.html)

[Function vs. class components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

[Understanding the Fundamentals of State in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f)

[Binding event handlers in React components](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)
