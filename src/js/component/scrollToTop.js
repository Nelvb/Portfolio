import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		console.log("ScrollToTop triggered");

		// Asegurar que no haya clases que bloqueen el scroll
		document.documentElement.classList.remove('is-loading');
		document.body.classList.remove('no-scroll');

		// Asegurar que solo un elemento tenga la barra de desplazamiento
		document.documentElement.style.overflowY = "hidden"; // Ocultar en HTML
		document.body.style.overflowY = "auto";             // Mostrar solo en body

		// Aplica un desplazamiento suave
		document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
		document.body.scrollTo({ top: 0, behavior: "smooth" });

	}, [location]);

	return <>{children}</>;
};

export default ScrollToTop;
