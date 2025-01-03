// Form.js
import React from 'react';
import InputGroup from './InputGroup'; // Componente para cada campo de formulario

function Form({ formData, handleInputChange, handleSubmit, message }) {
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        label="Curso:"
        id="course"
        name="course"
        value={formData.course}
        onChange={handleInputChange}
      />

      <InputGroup
        label="Fecha de matrícula:"
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleInputChange}
      />

      <InputGroup
        label="Alumno:"
        id="student"
        name="student"
        placeholder="Apellidos, Nombre"
        value={formData.student}
        onChange={handleInputChange}
      />

      <InputGroup
        label="Sexo:"
        id="gender"
        name="gender"
        type="select"
        value={formData.gender}
        onChange={handleInputChange}
        options={[
          { value: 'Masculino', label: 'Masculino' },
          { value: 'Femenino', label: 'Femenino' },
        ]}
      />

      <InputGroup
        label="Municipio:"
        id="municipality"
        name="municipality"
        value={formData.municipality}
        onChange={handleInputChange}
      />

      <InputGroup
        label="Ciudad:"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />

      <InputGroup
        label="Dirección:"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />

      <button type="submit">Enviar</button>

      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default Form;
