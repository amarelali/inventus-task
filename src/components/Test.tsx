
import React, { useState } from 'react';


const ParentComponent = () => {
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleItemClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div>
      <h1>{selectedTitle ? selectedTitle : 'Select an item'}</h1>
      <ChildComponent onItemClick={handleItemClick} />
    </div>
  );
};

const ChildComponent = ({ onItemClick }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} onClick={() => onItemClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ParentComponent;


