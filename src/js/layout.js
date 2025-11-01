import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AnimationProvider } from "./component/animationContext";
import { Home } from "./views/home";
import { AboutMe } from "./views/aboutMe";
import { Skills } from "./views/skills";
import { Contact } from "./views/contact";
import { Projects } from "./views/projects";
import { ProjectDetail } from "./views/projectDetail";
import { Footer } from "./component/footer";
import SettingsMenu from "./component/settingsMenu"; // Configuración global
import { LanguageProvider } from "../context/languageContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    // Precargar imágenes al montar el componente
    useEffect(() => {
        const preloadImages = (imageUrls) => {
            imageUrls.forEach((url) => {
                const img = new Image();
                img.src = url;
            });
        };

        // Precargar solo el logo principal (crítico para LCP en /home)
        preloadImages([
            "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp",
        ]);
    }, []);

    return (
        <LanguageProvider>
            <div>
                <AnimationProvider>
                    <BrowserRouter basename={basename}>
                        <ScrollToTop>
                            <div className="app-container">
                                <SettingsMenu /> {/* Menú de configuración */}
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<AboutMe />} />
                                    <Route path="/skills" element={<Skills />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/projects" element={<Projects />} />
                                    <Route path="/project/:id" element={<ProjectDetail />} />
                                    <Route path="*" element={<h1>Not found!</h1>} />
                                </Routes>
                                <Footer />
                            </div>
                        </ScrollToTop>
                    </BrowserRouter>
                </AnimationProvider>
            </div>
        </LanguageProvider>
    );
};

export default Layout;
