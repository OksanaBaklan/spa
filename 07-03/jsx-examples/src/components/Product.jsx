const myObj = {
  name: "Bob",
  age: 36,
  weblink: "https://github.com",
  image:
    "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x",
};

const nalinkItems = [
  <ol key="2">
    <li>Bob</li>
    <li>Tom</li>
    <li>Dilshod</li>
  </ol>,
];

const names = [
  { id: 1, name: "Oksana", age: 16 },
  { id: 2, name: "Oksana", age: 16 },
  { id: 3, name: "Tom", age: 16 },
  { id: 4, name: "Dilshod", age: 18 },
  { id: 5, name: "Ather", age: 16 },
  { id: 6, name: "Hamza", age: 6 },
];

const Product = () => {
  return (
    <div>
      <h2>
        My name is {myObj.name}. I am {myObj.age}
      </h2>

      <a href={myObj.weblink}>This is a link.</a>
      <img src={myObj.image} alt="" width="300px" />
      <div>{nalinkItems}</div>
      <ol>
        {names.map((elem) => {
          return (
            <li key={elem.id}>
              {" "}
              {elem.name}. My age is {elem.age}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Product;
