import React from 'react';

const CatagoriesCards = ({ catagory }) => {
  return (
    <div className="border px-5 py-3 rounded">
      <h1 className="text-center">{catagory?.title}</h1>
    </div>
  );
};

export default CatagoriesCards;