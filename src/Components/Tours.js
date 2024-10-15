import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="h-full w-screen flex flex-col overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center m-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl m-2 w-full sm:w-[50%] md:w-[40%] lg:w-[27%] border-4 border-blue-900 border-dashed px-1 py-1 flex justify-center rounded-lg">
          Plan with Love
        </h1>
      </div>

      {/* Tours Section */}
      <div className="flex items-center justify-center flex-wrap max-w-[1350px] mx-auto my-0 gap-4 p-4">
        {tours.map((tour, i) => {
          return (
            <Card
              key={i}
              {...tour}
              removeTour={removeTour}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]" // Responsive card sizing
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
