# `04` Bauen aus Arrays

Mit JSX kannst du auch **Arrays** von HTML-Elementen erstellen. Wenn wir z.B. ein Array von `<li>` haben, können wir sie alle auf einmal in das Dokument einfügen:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#root"));
```

Das resultierende HTML auf der Website wird sein:
```html
<div id="myDiv">
  <ul>
    <li>Bob Dust</li>
    <li>Fredy Mercury</li>
    <li>Shazam Nikola</li>
    <li>Wilibin Walabam</li>
  </ul>
</div>
```

# :speech_balloon: Anweisungen

Nehmen wir an, wir wollen, dass react die folgende Ausgabe in das Dokument rendert:

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link to google.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to facebook.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
</ul>
```

Aktualisiere das `navlinkItems`-Array, damit der aktuelle Code das ausgibt, was wir wollen.

#### :bulb: Hinweis:
- Du musst nur das Array "navlinkItems" aktualisieren, sonst nichts.
- React fordert dich auf, Schlüssel für jedes Element des Arrays zu verwenden [mehr dazu findest du hier](https://reactjs.org/docs/lists-and-keys.html#keys).
- Denke daran, `className` statt `class` zu verwenden.
