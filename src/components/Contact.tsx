import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Highlight, themes } from "prism-react-renderer"; // Para resaltar código
import { contactData, toastMessages } from "../assets/lib/data.tsx"; // Datos e idioma
import { useSectionInView } from "../assets/lib/hooks"; // Hook para detectar visibilidad de la sección
import { useLanguage } from "../context/language-context"; // Contexto para idioma
import { ToastContainer, toast } from "react-toastify"; // Notificaciones tipo toast
import { useTheme } from "../context/theme-context"; // Contexto de tema
import { motion, useScroll, useTransform } from "framer-motion"; // Animaciones
import emailjs from "@emailjs/browser"; // Para enviar correos electrónicos
import "react-toastify/dist/ReactToastify.css"; // Estilos para los toast

const Contact: React.FC = () => {

  // Estados para los campos del formulario
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);

  // Hooks para manejar idioma, tema y animaciones
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();

  // Referencia y animaciones de scroll
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Referencia del formulario para emailjs
  const form = useRef<HTMLFormElement>(null);

  // Notificación al enviar el formulario
  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_fotlqaq", // Tu Service ID
        "template_gk1wdka", // Tu Template ID (cámbialo por el real)
        form.current, // Referencia al formulario
        "v4TMUOwPDbbpnY44U" // Tu Public Key de EmailJS
      );
      console.log(result);
      toast.success(
        language === "ES"
          ? toastMessages.successEmailSent.es
          : toastMessages.successEmailSent.en
      );
    } catch (error) {
      console.error(error);
      toast.error(
        language === "ES"
          ? toastMessages.failedEmailSent.es
          : toastMessages.failedEmailSent.en
      );
    }
  };

  // Manejo del foco en los campos del formulario
  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "subject") setSubject(value);
    else if (name === "message") setMessage(value);

    setLastUpdatedField(name); // Actualiza el campo que se está editando
  };

  // Efecto para el parpadeo del cursor
  const [cursorBlink, setCursorBlink] = useState<boolean>(true);
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => clearInterval(blinkInterval);
  }, []);

  // Código simulado para mostrar en el formulario
  const codeSnippet = `
import dimas from "dimas";
//para que se vea mas chido jeje!
import { useState } from "react";

const [sender, setSender] = "${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  }";
const [recipient, setRecipient] = "${email}${
    lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
  }";
const [subject, setSubject] = "${subject}${
    lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
  }";
const [message, setMessage] = "${message}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  }";
`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        {/* Título y descripción */}
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--verdementa]">&lt;</span>
              {language === "ES" ? contactData.title.es : contactData.title.en}
              <span className="text-[--verdementa]">/&gt;</span>
            </p>
            <h2 className="text-[--black] text-center">
              {language === "ES"
                ? contactData.description.es
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>

        {/* Contenedor principal */}
        <div className="flex flex-row flex-wrap justify-center items-start gap-10 px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
  {/* Código simulado */}
  <div className="w-1/2 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-6 rounded-2xl p-10 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all quote-outer-container text-left max-lg:w-full max-lg:p-6 cursor-progress">
    <Highlight
      code={codeSnippet}
      language="tsx"
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} text-2xl max-lg:text-xl`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>

  {/* Formulario */}
  <form
  ref={form}
  className="flex flex-col gap-6 justify-center items-center w-1/2 max-lg:w-full max-lg:p-6"
  onSubmit={notifySentForm}
  autoComplete="on"
  autoCorrect="on"
>
  {/* Inputs de nombre, correo, asunto */}
  {contactData.inputfields.map((input, index) => (
    <input
      key={index}
      type={input.type}
      placeholder={
        language === "ES"
          ? input.placeholder.es
          : input.placeholder.en
      }
      name={input.name}
      value={
        input.name === "name"
          ? name
          : input.name === "email"
          ? email
          : input.name === "subject"
          ? subject
          : ""
      }
      required
      onFocus={() => handleInputFocus(input.name)}
      onChange={handleInputChange}
      className={`${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    />
  ))}

  {/* Textarea de mensaje */}
  <textarea
    rows={contactData.textarea.rows}
    placeholder={
      language === "ES"
        ? contactData.textarea.placeholder.es
        : contactData.textarea.placeholder.en
    }
    name={contactData.textarea.name}
    value={message}
    required
    onFocus={() => handleInputFocus(contactData.textarea.name)}
    onChange={handleInputChange}
    className={`${
      theme === "dark"
        ? "bg-[--blackblue] dark-mode-shadow"
        : "bg-[--icewhite] dark-shadow"
    }`}
  />

  {/* Botón de enviar */}
  <Button
    value={
      language === "ES"
        ? contactData.button.value.es
        : contactData.button.value.en
    }
    iconSVG={contactData.icon}
    buttoncolor={contactData.colors.main}
    iconcolor={contactData.colors.icon}
    type="submit"
    elementType="input"
  />

  {/* Toast notifications */}
  <ToastContainer
    className="w-max text-3xl block p-3 max-lg:w-full"
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme={theme}
  />
</form>
</div>
      </section>
    </React.Fragment>
  );
};

export default Contact;