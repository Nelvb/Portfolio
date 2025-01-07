export const ProjectsData = [
  {
    id: 1,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019809/principal1_xlgvvu.png",
    name: "Hoy No Cocino",
    description: "Plataforma para simplificar la gestión de reservas en restaurantes.",
    details: {
      fullDescription:
        "Aplicación web diseñada para simplificar la gestión de reservas en restaurantes, con una experiencia de usuario completa que permite a los usuarios registrarse, reservar mesas, y gestionar sus preferencias en tiempo real. Además, los restaurantes cuentan con un panel de administración para gestionar disponibilidad, datos de clientes y reservas.",
      tecnologiasUsadas:
        "La aplicación utiliza React.js para la interfaz de usuario y Flask como framework backend, conectándose a una base de datos PostgreSQL gestionada con SQLAlchemy. Las imágenes se manejan con Cloudinary, y la autenticación de usuarios se realiza mediante JWT. Para el diseño responsivo se emplea Bootstrap, y las notificaciones interactivas utilizan SweetAlert2. Además, se implementa Flask-Mail para correos electrónicos y React Hooks para la gestión del estado en el frontend.",
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
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019733/imagen_responsive_yfy4jv.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019815/Registro_principal_tchatv.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019746/bienvenidacliente_otjilj.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019759/Area_privada_restaurante_z3en9a.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019786/subidaCloudinary_hsoqqt.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732026550/search_restaurant_nnlp2k.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019772/reserva_oxoiff.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019791/sweet_alert_mfdio5.png",
      ],
    },
    projectUrl: "https://hoynococino.es",
    repoUrl: "https://github.com/Nelvb/Proyecto-Hoy-No-Cocino",
  },
  {
    id: 2,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019733/imagen_responsive_yfy4jv.png",
    name: "ToDo List",
    description: "Aplicación simple para gestionar tareas de manera eficiente.",
    details: {
      fullDescription:
        "Esta aplicación permite a los usuarios gestionar sus tareas diarias. Incluye funcionalidades como añadir, editar y eliminar tareas, con un diseño responsivo y moderno.",
      tecnologiasUsadas:
        "React.js para el frontend y Node.js para el backend. Base de datos gestionada con MongoDB. La autenticación se realiza mediante JWT.",
      tools: [
        "React.js",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019786/subidaCloudinary_hsoqqt.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
      ],
    },
    projectUrl: "https://todolist.com",
    repoUrl: "https://github.com/Nelvb/ToDo-List",
  },
  {
    id: 3,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019815/Registro_principal_tchatv.png",
    name: "E-commerce Store",
    description: "Tienda online con carrito de compras y pasarela de pago.",
    details: {
      fullDescription:
        "Plataforma de comercio electrónico que permite a los usuarios explorar productos, añadirlos a su carrito y realizar pagos. Incluye gestión de inventarios y panel de administración para vendedores.",
      tecnologiasUsadas:
        "React.js para el frontend, Flask para el backend, y PostgreSQL para la base de datos. Stripe integrado para procesar pagos.",
      tools: [
        "React.js",
        "Flask",
        "PostgreSQL",
        "Stripe",
        "Cloudinary",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019733/imagen_responsive_yfy4jv.png",
      ],
    },
    projectUrl: "https://ecommerce.com",
    repoUrl: "https://github.com/Nelvb/E-commerce-Store",
  },
  {
    id: 4,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019809/principal1_xlgvvu.png",
    name: "Weather App",
    description: "Consulta el clima en tiempo real de cualquier ubicación.",
    details: {
      fullDescription:
        "Aplicación que permite a los usuarios buscar y consultar el clima de diferentes ciudades en tiempo real, utilizando una API de clima externa.",
      tecnologiasUsadas:
        "React.js para la interfaz de usuario y consumo de la API de OpenWeather. Estilizado con Tailwind CSS.",
      tools: [
        "React.js",
        "OpenWeather API",
        "Tailwind CSS",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
      ],
    },
    projectUrl: "https://weatherapp.com",
    repoUrl: "https://github.com/Nelvb/Weather-App",
  },
  {
    id: 5,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019786/subidaCloudinary_hsoqqt.png",
    name: "Portfolio",
    description: "Portafolio personal para mostrar proyectos y habilidades.",
    details: {
      fullDescription:
        "Portafolio personal diseñado para mostrar proyectos, habilidades y experiencia profesional en desarrollo web. Este proyecto utiliza un diseño interactivo y responsivo que combina animaciones avanzadas, consumo dinámico de datos y un despliegue eficiente. Está pensado para destacar habilidades en frontend, backend y herramientas colaborativas, permitiendo una navegación intuitiva y profesional.",
      tecnologiasUsadas:
        "React.js para la creación de una interfaz interactiva con animaciones gestionadas mediante Anime.js. El backend está implementado con Flask, proporcionando una API robusta que incluye integración con la API de MailboxLayer para validar correos y evitar registros no deseados. Cloudinary se utiliza para la gestión dinámica de imágenes, mientras que EmailJS permite el envío de formularios de contacto sin necesidad de un servidor de correo. La aplicación se despliega automáticamente en GitHub Pages, utilizando Webpack para optimizar los recursos y garantizar un rendimiento fluido.",
      tools: [
            "React.js",
            "Anime.js",
            "Flask",
            "EmailJS",
            "MailboxLayer API",
            "Cloudinary",
            "GitHub Pages",
            "Webpack"
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019815/Registro_principal_tchatv.png",
      ],
    },
    projectUrl: "https://4geeksacademy.github.io/Nelvb-portfolio/",
    repoUrl: "https://github.com/Nelvb/Nelvb-portfolio",
  },
];
