import { useState } from "react";
import { jsPDF } from "jspdf"; // Importamos jsPDF
import Form from "./Form"; // Importamos el componente Form
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
      generatePDF(); // Generamos el PDF al enviar el formulario
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
