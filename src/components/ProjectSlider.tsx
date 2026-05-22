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
  const { ref } = useSectionInView("Projects");
  const { language } = useLanguage();

  const animationReference = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0.8 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <>
      <section
        className="
          relative
          w-full
          overflow-hidden
          py-16
          md:py-24
        "
        id="projects"
        ref={ref}
      >
        {/* TOAST */}
        <ToastContainer
          className="w-max text-base md:text-lg p-3"
          position="bottom-center"
          autoClose={5000}
          theme="light"
        />

        {/* HEADER */}
        <div
          className="
            flex flex-col
            items-center
            gap-10
            md:gap-16
          "
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            className="text-center px-4"
          >
            <p
              className="
                text-[--white]
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                mb-4
              "
            >
              <span className="text-[--verdementa]">&lt;</span>

              {language === "ES" ? "Proyectos" : "Projects"}

              <span className="text-[--verdementa]">/&gt;</span>
            </p>

            <h2
              className="
                text-[--white]
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
              "
            >
              {language === "ES" ? "Mis proyectos" : "My Projects"}
            </h2>
          </motion.div>

          {/* DESKTOP SLIDER */}
          <div className="hidden lg:flex justify-center w-full px-6">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className="w-full max-w-[1100px]"
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
              {projectsData.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="
                    bg-[--darkblue]
                    text-[--white]
                    rounded-3xl
                    p-10
                    xl:p-14
                  "
                >
                  <div className="flex gap-10 h-full">
                    {/* LEFT */}
                    <div className="w-[55%] flex flex-col justify-between gap-8">
                      <div className="space-y-6">
                        <h2 className="text-4xl font-bold">{project.title}</h2>

                        <p className="text-lg leading-relaxed">
                          {language === "ES"
                            ? project.description
                            : project.description_EN}
                        </p>
                      </div>

                      {/* TECHNOLOGIES */}
                      <div>
                        <h3 className="text-2xl font-semibold mb-6">
                          {language === "ES" ? "Tecnologías" : "Technologies"}
                        </h3>

                        <div className="grid grid-cols-5 gap-6">
                          {project.technologies.map(
                            (technology, innerIndex) => (
                              <div
                                key={innerIndex}
                                className="flex justify-center"
                              >
                                <img
                                  src={technology.icon}
                                  alt={technology.name}
                                  className="h-16 object-contain"
                                  data-tooltip-id="my-tooltip"
                                  data-tooltip-content={technology.name}
                                />
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* BUTTONS */}
                      <div className="flex gap-6">
                        <Button
                          label="Github Repository"
                          link={project.githuburl}
                          iconSVG={project.githubicon}
                          buttoncolor={project.colors.main}
                          iconcolor={project.colors.icon}
                        />
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div
                      className="
                        relative
                        w-[45%]
                        h-[40rem]
                        overflow-hidden
                        rounded-2xl
                        shadow-2xl
                      "
                    >
                      <img
                        src={project.image}
                        alt={`${project.title}-project`}
                        className="
                          w-full
                          transition-all
                          duration-[6000ms]
                          hover:-translate-y-1/2
                        "
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* MOBILE / TABLET */}
          {/* MOBILE / TABLET SWIPER */}
          <div className="lg:hidden w-full px-4 sm:px-6">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              modules={[Pagination, Autoplay]}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="w-full pb-14"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide key={index}>
                  <article className="bg-[--darkblue] border-[0.3rem] border-[--lightblue] rounded-3xl p-5 sm:p-8 flex flex-col gap-6 min-h-full">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold">
                      {project.title}
                    </h2>
                    <img src={project.image} alt={project.title} className="w-full h-[240px] sm:h-[320px] object-cover object-top rounded-2xl"/>
                    <p className="
              text-white
              text-base
              sm:text-lg
              leading-relaxed
            "
                    >
                      {language === "ES"
                        ? project.description
                        : project.description_EN}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div>
                      <h3
                        className="
                text-white
                text-xl
                font-semibold
                mb-4
              "
                      >
                        {language === "ES" ? "Tecnologías" : "Technologies"}
                      </h3>

                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {project.technologies.map((technology, innerIndex) => (
                          <div key={innerIndex} className="flex justify-center">
                            <img
                              src={technology.icon}
                              alt={technology.name}
                              className="h-14 object-contain"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex flex-col justify-center sm:flex-row gap-4">
                      <Button
                        label="Github Repository"
                        link={project.githuburl}
                        iconSVG={project.githubicon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                      />
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* TOOLTIP */}
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1rem",
          backgroundColor: "var(--verdementa)",
        }}
      />
    </>
  );
};

export default ProjectSlider;
