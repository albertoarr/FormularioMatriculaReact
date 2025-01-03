import React, { useState } from 'react';
import InputGroup from './InputGroup'; // Importamos el nuevo componente
import "./DataInput.css";

function DataInput() {
  const [formData, setFormData] = useState({
    course: '',
    date: '',
    student: '',
    gender: '',
    municipality: '',
    city: '',
    address: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      setMessage('Formulario enviado con éxito');
    } else {
      console.log("Faltan campos por cumplimentar");
      setMessage('Por favor, complete todos los campos');
    }
  };

  const validateForm = () => {
    for (let i in formData) {
      if (formData[i] === '') {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <div className="container">
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
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
}

export default DataInput;
