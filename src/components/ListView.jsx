import React from 'react';

/**
 * Esta función se usa para crear listViews parecidos a los de JavaFX
 * - items representa a un Array de datos
 * - onItemSelect representa la función que cambia el State correspondiente
 */
function ListView({ items, onItemSelect }) {
  return (
    <div className="list-view">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => onItemSelect(item)} // Llamada a la función cuando se hace clic
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
