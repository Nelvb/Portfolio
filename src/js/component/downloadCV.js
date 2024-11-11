import React from 'react';

export const DownloadCV = () => {
  return (
    <a 
      href="/NelsonValeroCV.pdf"  
      target="_blank"             // Abre el PDF en una nueva pestaña para visualizarlo
      rel="noopener noreferrer"   // Seguridad adicional al abrir en nueva pestaña
      className="download-cv-link"
    >
      Ver CV
    </a>
  );
};
