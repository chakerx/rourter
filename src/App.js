
import { useState } from 'react';
import './App.css';
import data from './Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieLists from './Components/MovieLists';
import Add from './Components/Add';
import Filtre from './Components/Filtre';


function App() {
  const [otherData, setOtherData]= useState(data)

  const [search, setSearch]= useState('');
  const [rate, setRate]= useState(0)


  const ajouter =(newMovie)=>{
    setOtherData([...otherData,newMovie])
  }
  return (
    <div className="App w-75">
      <div>
      <Add TheMovie={ajouter}/>
      <Filtre searching={setSearch} Ratingg={setRate} Ratee={rate}/>
      </div>
     <MovieLists dataMovie={otherData.filter(element=>element.title.trim().toLowerCase().includes(search) && element.rating>=rate)}/>
    </div>
  );
}

export default App;
