
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import Movies from './components/Movies';

function App() {

  const [moviesData, setMoviesData] = useState([])

  useEffect(()=>{
    console.log(moviesData)
  }, [moviesData])

  return (
    <div className="App">
      Movie Api

      <Search setMoviesData = {setMoviesData}/>
      <Movies moviesData={moviesData}/>
    </div>
  );
}

export default App;
