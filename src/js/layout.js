import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AnimationProvider } from "./component/animationContext";
import { Home } from "./views/home";
import { AboutMe } from "./views/aboutMe";
import { Skills } from "./views/skills";
import { Contact } from "./views/contact";
import { Projects } from "./views/projects";
import { ProjectDetail } from "./views/projectDetail";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import SettingsMenu from "./component/settingsMenu"; // Configuración global
import { translations } from "./component/translations"; // Traducciones

// Crear un contexto para el idioma
export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const Layout = () => {
    const basename = process.env.BASENAME || "";

    // Estado para el idioma (por defecto "es")
    const [language, setLanguage] = useState("es");

    // Función para cambiar idioma
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
    };

    // Precargar imágenes al montar el componente
    useEffect(() => {
        const preloadImages = (imageUrls) => {
            imageUrls.forEach((url) => {
                const img = new Image();
                img.src = url;
            });
        };

        preloadImages([
            "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp",
            "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736418289/responsive_qqsiux.png",
            "https://i.postimg.cc/30kDqnkN/html5.png",
            "https://i.postimg.cc/3WzyRjyj/css3.png",
            "https://i.postimg.cc/9DhrPWYr/new-javascript-image.png",
            "https://i.ibb.co/ZGX4pcH/react.png",
            "https://i.ibb.co/TBrhsGj/bootstrap.png",
            "https://i.ibb.co/g7xk09Q/python.png",
            "https://i.ibb.co/SNMgmK3/sql.png",
            "https://i.ibb.co/ZTfFr8p/mysql.png",
            "https://i.ibb.co/NC3cZ1x/postgresql.png",
            "https://i.ibb.co/61r8Xyz/sqlalchemy.png",
            "https://i.ibb.co/nwh7LxK/jwt.png",
            "https://i.ibb.co/txY283N/flask.png",
            "https://i.ibb.co/F3RGPmG/nodejs.png",
            "https://i.ibb.co/b3dWBmR/git.png",
            "https://i.ibb.co/hRMqd8J/github.png",
            "https://i.ibb.co/sKjVJPp/vsc.png",
        ]);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            <div>
                <AnimationProvider>
                    <BrowserRouter basename={basename}>
                        <ScrollToTop>
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
                        </ScrollToTop>
                    </BrowserRouter>
                </AnimationProvider>
            </div>
        </LanguageContext.Provider>
    );
};

export default injectContext(Layout);
