// DataInput.js
import React, { useState } from "react";
import InputGroup from "./InputGroup";
import ListView from "./ListView"; // Importamos el componente ListView
import "./DataInput.css";

function DataInput() {
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    student: "",
    gender: "",
    municipality: "",
    city: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  // Arrays normales de cursos y municipios
  const courses = [
    "Matemáticas",
    "Lengua y Literatura",
    "Ciencias Sociales",
    "Física",
    "Química",
  ];

  const municipalities = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Sevilla",
    "Zaragoza",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value, // Actualizamos el campo correspondiente en el estado
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      setMessage("Formulario enviado con éxito");
    } else {
      console.log("Faltan campos por cumplimentar");
      setMessage("Por favor, complete todos los campos");
    }
  };

  const validateForm = () => {
    for (let i in formData) {
      if (formData[i] === "") {
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
              { value: "Masculino", label: "Masculino" },
              { value: "Femenino", label: "Femenino" },
            ]}
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

          <InputGroup
            label="Municipio:"
            id="municipalities"
            name="municipalities"
            value={formData.municipality}
            onChange={handleInputChange}
          />
          
          <button type="submit">Enviar</button>
        </form>

        {message && <p className="message">{message}</p>}

        {/* ListView para seleccionar municipio */}
        <ListView
          items={municipalities}
          onSelect={(value) => handleSelectChange(value, "municipality")}
        />

        {/* ListView para seleccionar curso */}
        <ListView
          items={courses}
          onSelect={(value) => handleSelectChange(value, "course")}
        />
      </div>
    </>
  );
}

export default DataInput;
