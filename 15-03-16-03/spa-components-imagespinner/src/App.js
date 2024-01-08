import ImageLinks from "./imageLinks";
import ImgItem from "./component/ImgItem";

function App() {
  console.log(ImageLinks);
  return (
    <div className="App">
      <h2>Images Gallery</h2>
      <div style={{ display: "flex" }}>
        {ImageLinks.map((item, index) => (
          <ImgItem key={index + "imageItem"} imageLink={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
