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
