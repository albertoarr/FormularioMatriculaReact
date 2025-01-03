// ListView.js
import React, { useState } from 'react';
import "./ListView.css";

/**
 * Este componente muestra una lista de elementos.
 * Al hacer clic en un elemento, se actualiza el valor seleccionado.
 */
function ListView({ items, onSelect }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item); // Llamar al manejador de selección del padre
  };

  return (
    <div className="list-view">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? 'selected' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
