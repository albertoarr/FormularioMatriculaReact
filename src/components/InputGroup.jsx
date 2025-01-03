import React from 'react';

/**
 * Esta función representa cada uno de los conjunto label e input.
 * - label es la etiqueta del campo.
 * - id es el el input al que referencia la etiqueta.
 * - name referencia al nombre del input
 * - value es el valor que tomará en el State del formulario
 * - OnChange referencia a la función flecha que cambia el State
 * - type referencia al tipo de input que se genera (predeterminado como 'text')
 * - placeholder es el valor de muestra del input
 * - options se encarga de añadir campos diferentes a comboBoxes para elegir por el usuario
 */
function InputGroup({ label, id, name, value, onChange, type = 'text', placeholder = '', options = [] }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      {type === 'select' ? (
        <select id={id} name={name} value={value} onChange={onChange}>
          <option value="default">Selecciona el sexo</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default InputGroup;
