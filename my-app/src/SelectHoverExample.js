import React, { useState } from 'react';

const SelectHoverExample = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const [selectedItem, setSelectedItem] = useState('');
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOptionsVisible(false);
  };

  const handleMouseEnter = () => {
    setIsOptionsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsOptionsVisible(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="selected-item">
        {selectedItem || 'Select an item'}
      </div>
      {isOptionsVisible && (
        <ul className="options">
          {items.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectHoverExample;
