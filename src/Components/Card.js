import React, { useState } from 'react';

const Card = ({ id, name, price, info, image, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function clickHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="w-[400px] m-3 p-2 flex flex-col rounded-md shadow-md">
      <div className="flex justify-center">
        <img src={image} alt="not found" className="w-[360px] h-[280px]" />
      </div>
      <div className="font-bold m-2">
        <h4 className="text-green-600 font-bold">₹{price}</h4>
        <h4>{name}</h4>
      </div>
      <div className="m-2 mt-0 font-medium text-gray-700">
        {description}
        <span onClick={clickHandler} className="text-blue-500">
          {readmore ? `Show less` : `Read more`}
        </span>
      </div>
      <div className="border border-red-600 mt-3 text-center justify-center items-center mx-auto bg-red-200 rounded-lg font-bold text-base p-1 w-[70%]">
        <button onClick={() => removeTour(id)}>Not Intrested</button>
      </div>
    </div>
  );
};

export default Card;
