import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AnimationProvider } from "./component/animationContext";
import { Home } from "./views/home";
import { AboutMe } from "./views/aboutMe"; // Importamos el componente AboutMe
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { LoadingScreen } from "./component/loadingScreen"; // Importamos el componente LoadingScreen
import { useLoading } from "./component/loadingContext"; // Importamos el contexto de carga

const Layout = () => {
    const basename = process.env.BASENAME || "";
    const { isLoading, setIsLoading } = useLoading(); // Obtenemos el estado de carga y su función

    // Este efecto asegura que se desactive el loading al cargar el Layout
    useEffect(() => {
        setIsLoading(false); // Se asegura de desactivar la carga cuando el Layout se monta
    }, [setIsLoading]);

    return (
        <div>
            <AnimationProvider>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    {isLoading ? (
                        <LoadingScreen /> // Mostramos el LoadingScreen si está cargando
                    ) : (
                        <>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<AboutMe />} /> {/* Activamos la ruta AboutMe */}
                                <Route path="*" element={<h1>Not found!</h1>} />
                            </Routes>
                            <Footer />
                        </>
                    )}
                </ScrollToTop>
            </BrowserRouter>
            </AnimationProvider>
        </div>
    );
};

export default injectContext(Layout);
