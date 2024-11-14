import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AnimationProvider } from "./component/animationContext";
import { Home } from "./views/home";
import { AboutMe } from "./views/aboutMe";
import { Skills } from "./views/skills"; 
import { Contact } from "./views/contact";  {/* Importamos la vista de contacto */}
import { Projects } from "./views/projects"; {/* Importamos la vista de proyectos */}
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <AnimationProvider>
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutMe />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contact" element={<Contact />} /> {/* Nueva ruta */}
                            <Route path="/projects" element={<Projects />} /> {/* Nueva ruta */}
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
