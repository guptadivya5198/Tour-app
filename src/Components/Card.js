import React, { useState } from 'react';

const Card = ({ id, name, price, info, image, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const description  =readmore ?  info : `${info.substring(0, 200)}....`;

  function clickHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="">
      <div>
        <img src={image} alt="not found" />
      </div>
      <div>
        <h4>{price}</h4>
        <h4>{name}</h4>
      </div>
      <div>
        {description}
        <span onClick={clickHandler}>
          {readmore ? `show less` : `read more`}
        </span>
      </div>
      <div>
        <button onClick={() => removeTour(id)}>Not intrested</button>
      </div>
    </div>
  );
};

export default Card;
