import { useState } from "react";
import { jsPDF } from "jspdf"; // Importamos jspds
import Form from "./Form"; // Importamos el componente Form
import ListView from "./ListView"; // Importamos el componente ListView
import "./DataInput.css";

function DataInput() {
  // State para el formulario
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    student: "",
    gender: "",
    municipality: "",
    city: "",
    address: "",
  });

  // State para mensajes para el usuario
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

  /**
   * Esta función flecha actualiza los datos del State formData
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Esta función flecha se utiliza en los ListView para que cambien los States al hacer click
   */
  const handleSelectChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value, // Actualizamos el campo correspondiente en el estado
    });
  };

  /**
   * Esta función flecha crea el pdf si los datos están cumplimentados, si no es así se avisa al
   * usuario en el mismo formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado:", formData); // Prueba de datos 
      setMessage("Formulario enviado con éxito");
      generatePDF(); // Generamos el PDF al enviar el formulario
    } else {
      console.log("Faltan campos por cumplimentar"); // Prueba de datos
      setMessage("Por favor, complete todos los campos");
    }
  };

  /**
   * Esta función flecha asegura que ningún dato falte por cumplimentar
   */
  const validateForm = () => {
    for (let i in formData) {
      if (formData[i] === "") {
        return false;
      }
    }
    return true;
  };

  /**
   * Esta función flecha utiliza jspdf para generar 
   * el pdf a partir del State del formulario (si es válido)
   */
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Formulario de Inscripción", 20, 20);

    doc.setFontSize(12);
    doc.text(`Curso: ${formData.course}`, 20, 30);
    doc.text(`Fecha de matrícula: ${formData.date}`, 20, 40);
    doc.text(`Alumno: ${formData.student}`, 20, 50);
    doc.text(`Sexo: ${formData.gender}`, 20, 60);
    doc.text(`Ciudad: ${formData.city}`, 20, 70);
    doc.text(`Dirección: ${formData.address}`, 20, 80);
    doc.text(`Municipio: ${formData.municipality}`, 20, 90);

    doc.save("formulario_inscripcion.pdf");
  };

  return (
    <div className="container">
      <Form
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        message={message}
      />

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
  );
}

export default DataInput;
