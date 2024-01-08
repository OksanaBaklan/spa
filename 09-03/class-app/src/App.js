import "./App.css";
import ClassComponent from "./components/classComp/ClassComponent";
import FunctionalComponent from "./components/functionalComp/FunctionalComponent";
import Parent from "./components/props/Parent";

function App() {

  /* 
   - To pass data we use Props
   - Data can be passed from top to Bottom
   - That means parents can pass data to children through props
   - But Children can not share data to their parents through props
   - Siblings can also not share data through props because each component is totally independent in React

   /// But their is a way through which we can make it happen with out passing data through props ///
    - We will declare a function inside the parent 
    - that function will wait for some parameters
    - Then we will pass that function to the child in props
    - Then from that child we will call that function
    - And pass the Data that we want to send to the Parent inside the params of that function

   */
  let newDeveloper = "Nicolae"

  const updateNewDeveloperName = (updatedName) =>{
    newDeveloper = updatedName
    console.log(newDeveloper)
  }
  return (
    <div className="App">
      <header className="App-header">

  {/* <FunctionalComponent developerName="Hamza" role="Web Developer" newDeveloper = {newDeveloper} nameUpdater = {updateNewDeveloperName}/> */}
{/* It will bring actually all the code of that component inside the APP */}
     {/* <FunctionalComponent developerName="Ion" role="Data Minner" newDeveloper = {newDeveloper} nameUpdater = {updateNewDeveloperName}/> */}
{/* It will Again bring actually all the code of that component inside the APP */}

<Parent />

        {/* {console.log(FunctionalComponent())} */}
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
