import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		console.log("ScrollToTop triggered");

		// Aplica un desplazamiento suave
		document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
		document.body.scrollTo({ top: 0, behavior: "smooth" });

	}, [location]);

	return <>{children}</>;
};

export default ScrollToTop;
