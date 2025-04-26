import adobexdicon from "../../assets/icons/adobexdicon.svg";
import adobeillustratoricon from "../../assets/icons/ilustratoricon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import bootstrapicon from "../../assets/icons/bootstrapicon.svg";
import materialuiicon from "../../assets/icons/materialui.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import net from "../../assets/icons/neticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import reactnativeicon from "../../assets/icons/reactnative.svg";
import ionicicon from "../../assets/icons/ionicicon.svg";
import kotlinicon from "../../assets/icons/kotlinicon.svg";
import googlemapsicon from "../../assets/icons/maps.svg";
import csharpicon from "../../assets/icons/csharpicon.svg";
import angularicon from "../../assets/icons/angularicon.svg";
import laravelicon from "../../assets/icons/laravelicon.svg";
import nodejsicon from "../../assets/icons/nodeicon.svg";
import viteicon from "../../assets/icons/viteicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import mysqlicon from "../../assets/icons/mysql.svg";
import firebaseicon from "../../assets/icons/firebaseicon.svg";
import postmanicon from "../../assets/icons/postmanicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import lottiefilesicon from "../../assets/icons/lottiefiles.svg";
import jetpackcomposeicon from "../../assets/icons/DeviconJetpackcompose.svg";
import workcheckapp from "../../assets/img/workcheckapp.jpeg";
import edreventos from "../../assets/img/edr.svg";
import crmsaom from "../../assets/img/crm.svg";
import profilepicture from "../img/yo.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
  title: {
    es: "Hola, soy Dimas Lopez",
    en: "Hi, I'm Dimas Lopez",
  },
  subtitle: "Fullstack Developer ",
  description: {
    es: "Como recién egresado de la Universidad Tecnológica de Cancún en Ingeniería en Desarrollo y Gestión del Software, soy un apasionado de las TIC con iniciativa para ofrecer soluciones tecnológicas. Me motiva el aprendizaje continuo y la innovación, siempre buscando aplicar mis conocimientos en proyectos que generen un impacto positivo.",
    en: "As a recent graduate of the Technological University of Cancun with a degree in Software Development and Management Engineering, I am passionate about ICT and driven to offer technological solutions. I am motivated by continuous learning and innovation, always seeking to apply my knowledge to projects that generate a positive impact.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contactame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "WorkCheckApp",
    description:
      "Una app movil nativa hecha con Kotlin y Jetpack Compose. La app permite registrar entradas y salidas de empleados, se implementó la API de google maps para ver desde que lugar hacen check-in los empleados. La app está conectada a una base de datos en Firebase y se aplica el modelo MVVM.",
    description_EN:
      "A native mobile app made with Kotlin and Jetpack Compose. The app allows you to register employee check-ins and check-outs, and the Google Maps API was implemented to see from which location employees check in. The app is connected to a Firebase database and the MVVM model is applied.",
    technologies: [
      { name: "REST Api", icon: apiicon },
      { name: "Figma", icon: figmaicon },
      { name: "lottiefiles", icon: lottiefilesicon },
      { name: "Kotlin", icon: kotlinicon },
      { name: "Jetpack Compose", icon: jetpackcomposeicon },
      { name: "Firebase", icon: firebaseicon },
      { name: "Google Maps API", icon: googlemapsicon },
      { name: "Postman", icon: postmanicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: workcheckapp,
    githuburl: "https://github.com/dimaslopez2003/CheckWork.git",
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Sistema web de gestión de eventos",
    description:
      "Un sistema web de gestión de eventos para el hotel dorado royale, que permite a los usuarios crear, editar, eliminar y generar reportes de los eventos del hotel. Está hecho en Laravel y bootstrap para los estilos. ",
    description_EN:
      "A web event management system for the dorado royale hotel, which allows users to create, edit, delete and generate reports of the hotel's events. It is made in Laravel and bootstrap for styles.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Laravel", icon: laravelicon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: "Postman", icon: postmanicon },
      {name: "mySQL", icon: mysqlicon},
    ],
    image: edreventos,
    githuburl:"https://github.com/dimaslopez2003/primeraApp.git",
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Sistema CRM con integración de Whatsapp y agente IA conversacional",
    description:
      "sistema CRM para Grupo SAOM utilizando tecnologías como MySQL, Node.js y Angular, integrando WhatsApp como canal principal de comunicación y un agente virtual con inteligencia artificial. Este sistema permite optimizar la gestión de conversaciones con los clientes, reduciendo tiempos de respuesta y mejorando la eficiencia en la atención de consultas",
    description_EN:
      "CRM system for Grupo SAOM using technologies such as MySQL, Node.js and Angular, integrating WhatsApp as the main communication channel and a virtual agent with artificial intelligence. This system allows to optimize the management of conversations with customers, reducing response times and improving efficiency in the attention of queries",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Typescript", icon: typescripticon },
      { name: "Angular", icon: angularicon },
      {name: "Tailwind", icon: tailwindcssicon},
      { name: "Node.js", icon: nodejsicon },
      { name: "MySQL", icon: mysqlicon },
      { name: "Postman", icon: postmanicon },
      { name: "Node.js", icon: nodejsicon },
      {name: "AWS", icon: awsicon},
      { name: "Figma", icon: figmaicon },
    ],
    image: crmsaom,
    githuburl: "https://github.com/Develop-SISEC/crm-saom-front.git",
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;


export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "C#",
        hash: "#C#",
        icon: csharpicon,
        color: "#9B4F96",
      },
      {
        title: ".net",
        hash: "#.NET",
        icon: net ,
        color: "#9B4F96",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },

      {
        title: "Angular",
        hash: "#Angular",
        icon: [angularicon],
        color: ["#de1a1a"],
      },
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: [laravelicon],
        color: ["#de1a1a"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Vite",
        hash: "#Vite",
        icon: viteicon,
        color: "#621df6",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "BOOTSTRAP",
        hash: "#BOOTSTRAP",
        icon: bootstrapicon,
        color: "#c61bfd",
      },
      {
        title: "Material UI",
        hash: "#Material UI",
        icon: materialuiicon,
        color: "#1e9ff9",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#4FC08D",
      },
      {
        title: "Firebase",
        hash: "#Firebase",
        icon: [firebaseicon],
        color: ["#f6a71d"],
      },
      {
        title: "Postman", // cambiar
        hash: "#Postman",
        icon: postmanicon,
        color: "#fc471e",
      },
      {
        title: "Express", // cambiar
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {title: "Adobe XD", hash: "#Adobe XD",icon: adobexdicon, color: "#FF61F6",},
      { title: "Adobe Ilustrator", hash: "#Adobe Ilustrator", icon:adobeillustratoricon , color: "#fd9a1b" },
    ],
  },
] as const;

export const skillsDataMobile = [
  {
    skillsTitle: "MobileDevelopment",
    skills: [
      {
        title: "ReactNative",
        hash: "#ReactNative",
        icon: reactnativeicon,
        color: "#21759B",
      },
      {
        title: "Ionic",
        hash: "#Ionic",
        icon: ionicicon,
        color: "#0b81d8",
      },
      {
        title: "Kotlin",
        hash: "#Kotlin",
        icon: kotlinicon,
        color: "#fd9a1b",
      },
    ],
  },
] as const;

export const navLinks = [
  { es: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { es: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { es: "Sobre mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "© 2025 Todos los derechos reservados. Desarrollado por Dimas Arturo Lopez Montalvo."},
{en: "© 2025 All rights reserved. Developed by Dimas Arturo Lopez Montalvo."},
] as const;

export const sideBarRightMail = {
  link: "mailto:montalcoarturo@gmail.com",
  text: "montalcoarturo@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/dimas-arturo-l%C3%B3pez-montalvo-7701bb285/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/DimasArturo",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:montalcoarturo@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"Si lo puedes imaginar, lo puedes programar"',
    en: `"Everything you can imagine, you can program."`,
    author: "Alejandro Taboada Sánchez",
    year: "1997-2019",
  },
  {
    es: '"Portafolio de proyectos"',
    en: `"Portfolio of projects"`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre mí",
  title_EN: "About me",
  description: "Unas pocas líneas de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_ES: [
    {
      title: "Mi introducción a la tecnología",
      description:
        "Desde que era niño, tenia talento para la tecnología, siempre ayudé a mis familiares y amigos a resolver problemas técnicos. Mi pasión por la tecnología me llevó a estudiar Ingeniería en Desarrollo y Gestión del Software, donde adquirí habilidades en programación y desarrollo web.",
      icon: hardwareicon,
    },
    {
      title: "Mis valores",
      description:
        "Además de programar, me gusta ser honesto y directo. Me gusta trabajar en equipo y aprender de los demás. La comunicación abierta y la colaboración son fundamentales para mí.",
      icon: caricon,
    },
    {
      title: "Mis pasatiempos",
      description:
        "Me gusta viajar y descubrir nuevos lugares y culturas. La aventura solo comienza cuando dejas lo familiar atrás. Descubrir nuevos lugares y culturas es mi forma de inspiración creativa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "My introduction to technology",
      description:
        "Since I was a child, I had a talent for technology, always helping my family and friends solve technical problems. My passion for technology led me to study Software Development and Management Engineering, where I acquired skills in programming and web development.",
      icon: hardwareicon,
    },
    {
      title: "My values",
      description:
        "In addition to programming, I like to be honest and direct. I enjoy working in a team and learning from others. Open communication and collaboration are fundamental to me.",
      icon: caricon,
    },
    {
      title: "My hobbies",
      description:
        "I enjoy traveling and discovering new places and cultures. The adventure only begins when you leave the familiar behind. Discovering new places and cultures is my way of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escribe un mensaje y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es:"Tu Nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        es: "Por favor, introduce tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "Tu E-Mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, introduce tu E-Mail",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Tu Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, introduce tu asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Tu Mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, introduce tu mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Estoy de acuerdo en que Dimas puede usar mis datos personales (nombre y dirección de correo electrónico) para ponerse en contacto conmigo.",
      en: "I agree that Dimas may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, reconoces que has leído la Política de Privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    es: "🦄 La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Gracias por tu correo electrónico. Te responderé lo antes posible",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Lamentablemente, el envío de tu correo electrónico no funcionó. Por favor, inténtalo de nuevo más tarde",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "🦄 Por favor, introduce tu nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
