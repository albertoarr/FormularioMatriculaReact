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
    "Python Nivel I",
    "Python Nivel II",
    "Java Nivel I",
    "Java Nivel II",
    "C# Nivel I",
    "C# Nivel II",
  ];

  const municipalities = [
    "Las Palmas",
    "Telde",
    "Arucas",
    "Santa Brígida",
    "Ingenio",
    "Agüimes",
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
            id="municipality"
            name="municipality"
            value={formData.municipality}
            onChange={handleInputChange}
          />

          <button type="submit">Enviar</button>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="containerLV">
          {/* ListView para seleccionar curso */}
          <div>
            <h3>Cursos</h3>
            <ListView
              items={courses}
              onSelect={(value) => handleSelectChange(value, "course")}
            />
          </div>
          {/* ListView para seleccionar municipio */}
          <div>
            <h3>Municipios</h3>
            <ListView
              items={municipalities}
              onSelect={(value) => handleSelectChange(value, "municipality")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DataInput;
