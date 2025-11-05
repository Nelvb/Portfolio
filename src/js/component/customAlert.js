/**
 * src/js/component/customAlert.js
 * Componente de alertas personalizadas para feedback al usuario.
 * Reemplaza alert() nativo con diseño personalizado y mejor UX.
 * 
 * Funcionalidad:
 * - Muestra mensajes de éxito, error o información
 * - Overlay modal con animación de entrada
 * - Botón de cierre que ejecuta callback onClose
 * - Estilos diferenciados por tipo (success, error, info)
 * 
 * Props: message (string), type (string), onClose (function)
 * 
 * @author Nelson Valero
 */
import React from 'react';
import '../../styles/customAlert.css';

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

export default CustomAlert;
