import data from './data';
import './App.css';
import Tours from './Components/Tours';
import { useState } from 'react';

function App() {
  const[tours, setTours] =  useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length ===0){
    return(
      <div>
        <h1>No Tours Left</h1>
        <button onClick={ () => setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours = {tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
