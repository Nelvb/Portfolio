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
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    // Función para precargar imágenes
    const preloadImages = (imageUrls) => {
        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    };

    // Precarga de imágenes globales al montar Layout
    useEffect(() => {
        preloadImages([
            "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736417373/logo_nel-sin-fondo_1_gw079z.webp",
            "https://res.cloudinary.com/dy1pkrd52/image/upload/f_auto,q_auto/v1736418289/responsive_qqsiux.png",
            "https://i.postimg.cc/30kDqnkN/html5.png", // HTML5
            "https://i.postimg.cc/3WzyRjyj/css3.png", // CSS3
            "https://i.postimg.cc/9DhrPWYr/new-javascript-image.png", // JavaScript
            "https://i.ibb.co/ZGX4pcH/react.png", // React
            "https://i.ibb.co/TBrhsGj/bootstrap.png", // Bootstrap
            "https://i.ibb.co/g7xk09Q/python.png", // Python
            "https://i.ibb.co/SNMgmK3/sql.png", // SQL
            "https://i.ibb.co/ZTfFr8p/mysql.png", // MySQL
            "https://i.ibb.co/NC3cZ1x/postgresql.png", // PostgreSQL
            "https://i.ibb.co/61r8Xyz/sqlalchemy.png", // SQLAlchemy
            "https://i.ibb.co/nwh7LxK/jwt.png", // JWT
            "https://i.ibb.co/txY283N/flask.png", // Flask
            "https://i.ibb.co/F3RGPmG/nodejs.png", // Node.js
            "https://i.ibb.co/b3dWBmR/git.png", // Git
            "https://i.ibb.co/hRMqd8J/github.png", // GitHub
            "https://i.ibb.co/sKjVJPp/vsc.png", // Visual Studio Code
            "https://i.ibb.co/LnCNcTJ/cloudinary.png", // Cloudinary
            "https://i.ibb.co/7k78zmg/jest.png", // Jest
            "https://i.ibb.co/P9pr8fz/github-codespaces.png", // GitHub Codespaces
        ]);
    }, []);

    return (
        <div>
            <AnimationProvider>
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutMe />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/project/:id" element={<ProjectDetail />} /> {/* Nueva ruta */}
                            <Route path="*" element={<h1>Not found!</h1>} />
                        </Routes>
                        <Footer />
                    </ScrollToTop>
                </BrowserRouter>
            </AnimationProvider>
        </div>
    );
};

export default injectContext(Layout);
