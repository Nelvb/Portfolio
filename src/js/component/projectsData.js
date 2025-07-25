export const ProjectsData = [
  {
    id: 1,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741974879/PrincipalHome_i6daz1.webp",
    name: "Hoy No Cocino",
    description: {
      en: "Platform to simplify restaurant reservation management.",
      es: "Plataforma para simplificar la gestión de reservas en restaurantes.",
    },
    details: {
      fullDescription: {
        en: "Web application designed to simplify restaurant reservation management, offering users a full experience to sign up, book tables, and manage their preferences in real-time. Additionally, restaurants have an admin panel to manage availability, customer data, and reservations.",
        es: "Aplicación web diseñada para simplificar la gestión de reservas en restaurantes, con una experiencia de usuario completa que permite a los usuarios registrarse, reservar mesas, y gestionar sus preferencias en tiempo real. Además, los restaurantes cuentan con un panel de administración para gestionar disponibilidad, datos de clientes y reservas.",
      },
      tecnologiasUsadas: {
        en: "The app uses React.js for the user interface and Flask as a backend framework, connected to a PostgreSQL database managed with SQLAlchemy. Images are handled with Cloudinary, and user authentication is performed with JWT. For responsive design, Bootstrap is employed, and interactive notifications use SweetAlert2. Additionally, Flask-Mail is implemented for email functionality, and React Hooks manage frontend state effectively.",
        es: "La aplicación utiliza React.js para la interfaz de usuario y Flask como framework backend, conectándose a una base de datos PostgreSQL gestionada con SQLAlchemy. Las imágenes se manejan con Cloudinary, y la autenticación de usuarios se realiza mediante JWT. Para el diseño responsivo se emplea Bootstrap, y las notificaciones interactivas utilizan SweetAlert2. Además, se implementa Flask-Mail para correos electrónicos y React Hooks para la gestión del estado en el frontend.",
      },
      tools: [
        "Python",
        "React.js",
        "PostgreSQL",
        "Flask",
        "SQLAlchemy",
        "Cloudinary",
        "JWT",
        "Flask-Mail",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975271/home_otyoxu.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975363/presentacion_g3xxkf.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975507/restaurantes_dyto0e.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975530/restauranteElegido_nluzz1.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975312/iniciarSesion_ieugkh.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975490/areaPrivada_qzl6te.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975346/registroRequerido_sause2.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975327/registro_htn0do.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975334/registroExito_v1w9of.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741975551/datosRestaurante_lni52j.webp"
      ],
    },
    projectUrl: "https://hoynococino.es",
    repoUrl: "https://github.com/Nelvb/Proyecto-Hoy-No-Cocino",
  },
  {
    id: 2,
    backgroundImage: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751544916/home-principal-hero_crlvaf.webp",
    name: "LHC Legal & Consulting",
    description: {
      en: "Legal advisory platform with content management and blog system.",
      es: "Plataforma de asesoría legal con sistema de gestión de contenidos y blog.",
    },
    details: {
      fullDescription: {
        en: "LHC Legal & Consulting is a legal advisory platform developed from scratch with a full-stack architecture. The system includes article creation and editing for administrators, a structured blog, contact and FAQs pages, responsive layout, and Dockerized environments for production and development. The admin area is separated visually and functionally, with protected routes and a clean UI.",
        es: "LHC Legal & Consulting es una plataforma de asesoría legal desarrollada desde cero con arquitectura full-stack. El sistema incluye creación y edición de artículos para administradores, blog estructurado, páginas de contacto y preguntas frecuentes, diseño responsive y entornos dockerizados para producción y desarrollo. El área de administración está separada visual y funcionalmente, con rutas protegidas y una interfaz clara.",
      },
      tecnologiasUsadas: {
        en: "Frontend built with Next.js and TypeScript, styled with Tailwind CSS. Zustand is used for global state management. The backend is implemented in Flask with PostgreSQL, authentication via JWT, and a modular structure. Docker is used to ensure consistency across environments. Image hosting with Cloudinary. Admins can create articles using a custom HTML parser (no Quill or TipTap). Fully tested with React Testing Library and Pytest.",
        es: "Frontend construido con Next.js y TypeScript, estilizado con Tailwind CSS. Zustand gestiona el estado global. El backend está implementado en Flask con PostgreSQL, autenticación JWT y estructura modular. Docker se utiliza para asegurar consistencia entre entornos. Las imágenes se alojan con Cloudinary. Los administradores pueden crear artículos usando un parser HTML personalizado (sin Quill ni TipTap). Testeado completamente con React Testing Library y Pytest.",
      },
      tools: [
        "Next.js", "TypeScript", "Tailwind CSS", "Zustand",
        "Flask", "SQLAlchemy", "PostgreSQL", "JWT",
        "Cloudinary", "Docker", "Pytest", "React Testing Library"
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751545137/home_2_fqjqqj.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751545281/Areas_dsgr7r.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751545527/Faq_mmqgqh.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751545936/About-us_wemezi.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751546104/Contact_nfseth.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751546288/Login-admin_u0kazf.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751546502/Panel-admin_dmusrz.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1751546720/side-menu-movil_jdnszv.webp"
      ],
    },
    projectUrl: "https://lhc-frontend.fly.dev",
    repoUrl: "https://github.com/Nelvb/LHC-Legal-And-Consulting",
  },
  {
    id: 3,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800610/Home_principal_projects_uz1d3u.webp",
    name: "The Roas Factory",
    description: {
      en: "Digital Marketing Agency specialized in online advertising and SEO optimization.",
      es: "Agencia de Marketing Digital especializada en publicidad online y optimización SEO.",
    },
    details: {
      fullDescription: {
        en: "Web platform developed for a digital marketing agency, featuring an interactive homepage with animated carousels and SEO optimization. The project includes a comprehensive blog system with dynamically generated articles and meta tags for improved search engine visibility. Users can contact the agency through email forms with validation or direct WhatsApp integration. The site architecture follows a modular component design with Context API for state management, ensuring excellent performance across all devices with responsive layouts and optimized image loading.",
        es: "Plataforma web desarrollada para una agencia de marketing digital, con una página principal interactiva que incluye carruseles animados y optimización SEO. El proyecto incorpora un sistema completo de blog con artículos generados dinámicamente y meta tags para mejorar la visibilidad en motores de búsqueda. Los usuarios pueden contactar con la agencia mediante formularios de correo con validación o integración directa con WhatsApp. La arquitectura del sitio sigue un diseño modular de componentes con Context API para la gestión del estado, garantizando un rendimiento excelente en todos los dispositivos con diseños responsivos y carga optimizada de imágenes.",
      },
      tecnologiasUsadas: {
        en: "Frontend built with React.js, React Router for navigation, and React Helmet for dynamic meta tags and SEO optimization. Styling implemented with CSS3 and Bootstrap, while Cloudinary handles image optimization. The deployment is managed through Vercel with continuous integration. Google Tag Manager integration for analytics and Open Graph meta tags for better social media sharing.",
        es: "Frontend construido con React.js, React Router para la navegación y React Helmet para meta tags dinámicos y optimización SEO. Estilos implementados con CSS3 y Bootstrap, mientras que Cloudinary gestiona la optimización de imágenes. El despliegue se administra a través de Vercel con integración continua. Integración de Google Tag Manager para análisis y meta tags de Open Graph para mejorar la compartición en redes sociales.",
      },
      tools: [
        "React.js",
        "React Helmet",
        "CSS3",
        "Bootstrap",
        "Cloudinary",
        "Vercel",
        "Google Tag Manager",
        "Context API",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800623/Home_fkran0.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800651/Home2_thopnq.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800678/Agencia_wileao.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800786/Servicios_p6qq7n.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800688/Blog_havrdh.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800696/Articulo_odehri.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800740/Contactanos_mnannd.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800752/Contactanos2_qdz83a.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741800793/Modal_mobile_vlh8zm.webp",
      ],
    },
    projectUrl: "https://the-roas-factory.vercel.app/",
    repoUrl: "https://github.com/Nelvb/TheRoasFactory",
  },
  {
    id: 4,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741782526/imagen_principal_5_halhze.webp",
    name: "Portfolio",
    description: {
      en: "Personal portfolio to showcase projects and professional experience.",
      es: "Portafolio personal para mostrar proyectos y experiencia profesional.",
    },
    details: {
      fullDescription: {
        en: "Personal portfolio that showcases my work and journey as a developer. Featuring a dynamic theme selector that allows you to choose between dark and light modes, adapting to your visual preference. The site also offers language selection between English and Spanish, providing a personalized browsing experience. You'll find an introduction about me, highlights of my skills and projects, and an easy way to connect. Built with smooth animations and a responsive design, the portfolio aims to provide an intuitive and accessible overview of my professional path.",
        es: "Portafolio personal que muestra mi trabajo y trayectoria como desarrollador. Con un selector de tema que te permite elegir entre modo oscuro y claro, adaptándose a tu preferencia visual. El sitio también ofrece selección de idioma entre inglés y español, brindando una experiencia de navegación personalizada. Encontrarás una introducción sobre mí, los puntos destacados de mis habilidades y proyectos, y una forma fácil de contactar. Construido con animaciones suaves y un diseño responsivo, el portfolio busca proporcionar una visión intuitiva y accesible de mi recorrido profesional.",
      },
      tecnologiasUsadas: {
        en: "Built with React.js for the frontend, utilizing Anime.js for smooth animations. The backend is implemented with Flask and Python. Advanced email validation and anti-spam protection integrated to ensure secure and authentic communication. Implemented client-side and server-side validation to prevent malicious submissions and protect the contact form from potential abuse.",
        es: "Construido con React.js para el frontend, utilizando Anime.js para animaciones suaves. Backend implementado con Flask y Python. Validación avanzada de correos electrónicos y protección contra spam integrada para garantizar una comunicación segura y auténtica. Se implementaron validaciones tanto en el lado del cliente como del servidor para prevenir envíos maliciosos y proteger el formulario de contacto de posibles abusos.",
      },
      tools: [
        "React.js",
        "Anime.js",
        "Python",
        "MailboxLayer API",
        "EmailJS",
        "Webpack",
        "Vercel",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741778389/Inicio_vkrbdm.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741787992/modal_ba2rhb.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741787720/home_modo_dia_defo7f.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741778396/About_me_qttvgc.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741778414/Habilidades_2_oveumy.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741790193/Contacto_modo_dia_c9q6g0.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741788245/Modal_mensajes_wqshpk.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741788351/Proyectos_modo_dia_slrgzg.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741788792/Proyectos_modal_noche_wd33xw.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741788321/Proyecto_modo_dia_f87gmv.webp",
      ],
    },
    projectUrl: "https://portfolio-nelvbs-projects.vercel.app",
    repoUrl: "https://github.com/Nelvb/Portfolio",
  },
  {
    id: 5,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741815013/home_principal_template_qsvc2m.webp",
    name: "Starter Template",
    description: {
      en: "Complete template for full-stack projects with Next.js, Flask, and Docker integration.",
      es: "Template completo para proyectos full-stack con Next.js, Flask e integración Docker.",
    },
    details: {
      fullDescription: {
        en: "A comprehensive starter template designed to accelerate full-stack development projects. Built with Next.js for the frontend and Flask for the backend, this template includes pre-configured authentication with JWT, database integration with PostgreSQL, and styling with Tailwind CSS. The project structure follows best practices for scalability and maintainability, with modular components and clear separation of concerns. Features include user authentication flows, protected routes, dark/light theme support, and responsive layouts for all devices.",
        es: "Un template inicial completo diseñado para acelerar proyectos de desarrollo full-stack. Construido con Next.js para el frontend y Flask para el backend, este template incluye autenticación preconfigurada con JWT, integración de base de datos con PostgreSQL y estilos con Tailwind CSS. La estructura del proyecto sigue las mejores prácticas para escalabilidad y mantenibilidad, con componentes modulares y clara separación de responsabilidades. Las características incluyen flujos de autenticación de usuarios, rutas protegidas, soporte para temas claro/oscuro y diseños responsivos para todos los dispositivos.",
      },
      tecnologiasUsadas: {
        en: "Frontend built with Next.js (v15.2.0) and TypeScript, using Tailwind CSS for styling and CLSX for conditional class handling. Backend implemented with Flask, SQLAlchemy ORM for database operations, and PostgreSQL as the database. JWT manages authentication between frontend and backend. The entire stack is containerized with Docker and Docker Compose for easy deployment, while GitHub Actions handle continuous integration and automated testing with Pytest.",
        es: "Frontend construido con Next.js (v15.2.0) y TypeScript, utilizando Tailwind CSS para estilos y CLSX para el manejo condicional de clases. Backend implementado con Flask, ORM SQLAlchemy para operaciones de base de datos y PostgreSQL como base de datos. JWT gestiona la autenticación entre frontend y backend. Todo el stack está containerizado con Docker y Docker Compose para facilitar el despliegue, mientras que GitHub Actions maneja la integración continua y pruebas automatizadas con Pytest.",
      },
      tools: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Flask",
        "SQLAlchemy",
        "PostgreSQL",
        "JWT",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "Pytest",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741815027/Home_template_xu69hl.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741815057/signup_m67u2p.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741815072/Login_nohm1o.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741815089/dashboard_s8jrri.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741818219/modal_mobile_ajznwj.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1741815123/readme_nlvzno.webp",
      ],
    },
    projectUrl: "",
    repoUrl: "https://github.com/Nelvb/Starter_template",
  },
  {
    id: 6,
    backgroundImage: "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624169/Pagina_principal_imagen_presentacion_l6e6th.webp",
    name: "Boost A Project",
    description: {
      en: "Real estate investment platform with a professional admin panel.",
      es: "Plataforma de inversión inmobiliaria con panel de administración profesional.",
    },
    details: {
      fullDescription: {
        en: "Boost A Project is a real estate investment platform designed to connect investors with high-potential projects. Built with a professional and scalable architecture using Next.js and TypeScript on the frontend and Flask on the backend, the system is already functional in key areas such as authentication, article creation, and project display. The admin panel offers full control over content and communication. Focused on transparency, scalability, and investor experience, the platform is ready to grow with future features like payment integrations and legal document management.",
        es: "Boost A Project es una plataforma de inversión inmobiliaria diseñada para conectar a inversores con proyectos de alto potencial. Construida con una arquitectura profesional y escalable utilizando Next.js y TypeScript en el frontend y Flask en el backend, el sistema ya es funcional en áreas clave como autenticación, creación de artículos y visualización de proyectos. El panel de administración permite un control total sobre el contenido y la comunicación. Con foco en la transparencia, la escalabilidad y la experiencia del inversor, la plataforma está preparada para seguir creciendo con futuras funcionalidades como pasarelas de pago y gestión documental legal.",
      },
      tecnologiasUsadas: {
        en: "Frontend built with Next.js and TypeScript using Tailwind CSS for design and Zustand for state management. The backend is powered by Flask and PostgreSQL, with JWT authentication and SQLAlchemy for database operations. Articles are created with a custom HTML parser, and Cloudinary handles image hosting. The app is Docker-ready, with structure prepared for CI/CD and SEO optimizations including metadata and dynamic routing.",
        es: "Frontend construido con Next.js y TypeScript usando Tailwind CSS para el diseño y Zustand para la gestión de estado. El backend está desarrollado con Flask y PostgreSQL, con autenticación JWT y SQLAlchemy para las operaciones de base de datos. Los artículos se crean mediante un parser HTML personalizado, y Cloudinary se encarga del alojamiento de imágenes. La app está lista para Docker, con estructura preparada para CI/CD y optimización SEO incluyendo metadatos y rutas dinámicas.",
      },
      tools: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Flask",
        "SQLAlchemy",
        "PostgreSQL",
        "JWT",
        "Cloudinary",
        "Docker",
        "HTML Parser",
        "CI/CD Ready",
        "SEO Optimization"
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624205/Imagen_hero_section_yyxwsd.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624425/SideMenu_ksxfj8.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624350/Home_2_si4qrw.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624269/Home_3_kgxqmo.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624309/Home_4_uyxbx8.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624316/Home_5_f82gmv.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624401/Home_6_uei6cj.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624407/Home_7_xsinzu.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624455/InicioSesion_rh6ok3.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624467/Registro_y22wgz.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624476/Vista_Blog_et7kdi.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624502/Articulo_m0qo72.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624522/Editor_articulo_yc3da0.webp",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1744624538/EditorArticulo_2_bk9de3.webp"
      ],
    },
    projectUrl: "",
    repoUrl: "https://github.com/Nelvb/Plataforma-inversion",
  },
];
