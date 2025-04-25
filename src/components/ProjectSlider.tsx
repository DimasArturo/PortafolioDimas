import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import { projectsData } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const ProjectSlider: React.FC = () => {
  // Hook para detectar si la sección está en vista
  const { ref } = useSectionInView("Projects");

  // Obtiene el idioma actual (ES o EN)
  const { language } = useLanguage();

  // Referencia para animaciones
  const animationReference = useRef<HTMLDivElement>(null);

  // Animaciones de scroll con Framer Motion
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <React.Fragment>
      {/* Sección principal */}
      <section
        className="skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2"
        id="projects"
        ref={ref}
      >
        {/* Contenedor de notificaciones */}
        <ToastContainer
          className="w-max text-3xl block p-3"
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Fondo y título */}
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              {/* Título */}
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--verdementa]">&lt;</span>
                {language === "ES" ? "Proyectos" : "Projects"}
                <span className="text-[--verdementa]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "ES" ? "Mis proyectos" : "My Projects"}
              </h2>
            </motion.div>

            {/* Slider de proyectos */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className="w-[60vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {projectsData.map((project, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between rounded-2xl p-20 text-left max-lg:hidden"
                >
                  {/* Contenido izquierdo */}
                  <div className="w-[55%] flex flex-col gap-12 justify-between">
                    <h2>{project.title}</h2>
                    <p className="text-white">
                      {language === "ES"
                        ? project.description
                        : project.description_EN}
                    </p>
                    <div className="technologies">
                      <h3>
                        {language === "ES" ? "Tecnologías" : "Technologies"}
                      </h3>
                      <div className="grid grid-cols-6 gap-10 p-4">
                        {project.technologies.map(
                          (technology, innerIndex: number) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[60%]"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="buttons flex gap-10">

                      <Button
                        label="Github Repository"
                        link={project.githuburl}
                        iconSVG={project.githubicon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                      />
                    </div>
                  </div>

                  {/* Contenido derecho */}
                  <div className="right-content relative h-[40rem] overflow-hidden rounded-xl w-[40%] transition-all duration-200 shadow-2xl">
                    <img
                      src={project.image}
                      alt={`${project.title}-project-mockup`}
                      className="w-full h-auto transition-all duration-[6000ms] transform opacity-100 hover:translate-y-[-50%]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Proyectos en vista móvil */}
            {projectsData.map((project, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <h2 className="text-white">{project.title}</h2>
                <img
                  src={project.image}
                  alt={project.image}
                  className="h-[35vh] w-full object-cover object-top rounded-3xl"
                />
                <div className="buttons flex gap-10 max-lg:flex-col">
                  <Button
                    label="Github Repository"
                    link={project.githuburl}
                    iconSVG={project.githubicon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                  />
                </div>
                <p className="text-white max-lg:text-4xl">
                  {language === "ES"
                    ? project.description
                    : project.description_EN}
                </p>
                <div className="technologies">
                  <h3 className="text-white">
                    {language === "ES" ? "Tecnologías" : "Technologies"}
                  </h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {project.technologies.map(
                      (technology, innerIndex: number) => (
                        <img
                          key={innerIndex}
                          src={technology.icon}
                          alt={`${project.title}-icon`}
                          className="h-[5rem] w-[60%]"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={technology.name}
                        />
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tooltip para tecnologías */}
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--verdementa)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;