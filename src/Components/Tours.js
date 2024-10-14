import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden">
      <div className="flex flex-col justify-center items-center m-4">
        <h1 className="text-5xl m-2 w-[27%] border-4 border-blue-900 border-dashed px-1 flex justify-center py-1 rounded-lg ">
          Plan with Love
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap max-w-[1300px] mx-auto my-0 ">
        {tours.map((tour, i) => {
          return <Card key={i} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
