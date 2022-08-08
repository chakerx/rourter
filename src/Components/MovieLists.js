import React from 'react';
import MovieCard from './MovieCard';

function MovieLists ({dataMovie}) {
  return (
   
    <div  className='d-flex w-25'>
    {dataMovie.map((element)=>(<MovieCard dataMovie={element} key={element.id}/>))}  
    </div>
   
  );
}

export default MovieLists;