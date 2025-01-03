import { useState, useEffect } from "react";
import "./App.css";
import DataInput from "./components/dataInput";

function App() {
  // Obtener el modo guardado en localStorage de DOM
  const savedMode = localStorage.getItem("mode");
  // Si no hay uno guardado se predetermina el tema claro
  const initialMode = savedMode ? savedMode === "dark-mode" : false;

  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  // Cambiar el modo y aplical la clase
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.className = newMode ? "dark-mode" : "light-mode";

    // Guardar el modo seleccionado en localStorage de DOM
    localStorage.setItem("mode", newMode ? "dark-mode" : "light-mode");
  };

  // Usar useEffect para aplicar el modo correcto cuando la página se carga
  useEffect(() => {
    document.documentElement.className = isDarkMode
      ? "dark-mode"
      : "light-mode";
  }, [isDarkMode]);

  const closeWindow = () => {
    window.close(); // Botón para cerrar la pestaña
  };

  return (
    <div className="container0">
      <div className="container1">
        {/* Contenedor para los botones */}
        <div className="buttons-container">
          <button onClick={toggleDarkMode}>
            Cambiar a {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>

          <button onClick={closeWindow}>Cerrar Pestaña</button>
        </div>

        <DataInput />
      </div>
    </div>
  );
}

export default App;
