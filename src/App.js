import data from './data';
import './App.css';
import Tours from './Components/Tours';
import { useState } from 'react';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="flex  flex-col ">
        <h1 className="flex items-center justify-center mt-[20%] text-blue-500 font-bold text-3xl">No Tours Left</h1>
        <button onClick={() => setTours(data)} className='border bg-red-200 text-white font-bold text-xl rounded-md border-red-500 w-[10%] flex justify-center m-auto mt-4'>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
