import "./App.css";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import ChildOne from "./components/ChildOne"
import ChildTwo from "./components/ChildeTwo"
import LastChild from "./components/LastChild"
import NavBar from './components/NavBar'

function App() {
 
  return (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/one" element={<ChildOne/>}/>
      <Route path="/two" element={<ChildTwo />}/>
      <Route path="/last" element={<LastChild />}/>
    </Routes>
  </div> 
   )
}

export default App;

