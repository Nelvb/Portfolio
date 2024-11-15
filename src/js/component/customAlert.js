import React from 'react';
import '../../styles/customAlert.css'; // Ruta correcta al archivo CSS

const CustomAlert = ({ message, type = "success", onClose }) => {
    return (
        <div className="custom-alert-overlay">
            <div className={`custom-alert ${type}`}>
                <p>{message}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default CustomAlert; // Asegúrate de exportar por defecto
