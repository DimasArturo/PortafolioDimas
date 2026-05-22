import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon?: string | React.ReactNode;
  color?: string | React.ReactNode;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillIconSrc = (theme: string, skill: Skill) => {
    const isDarkVariant =
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"));

    if (isDarkVariant) {
      return Array.isArray(skill.icon) ? skill.icon[1] : skill.icon;
    }

    return Array.isArray(skill.icon) ? skill.icon[0] : skill.icon;
  };

  const getSkillColor = (theme: string, skill: Skill) => {
    const isDarkVariant =
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"));

    if (isDarkVariant) {
      return Array.isArray(skill.color) ? skill.color[1] : skill.color;
    }

    return Array.isArray(skill.color) ? skill.color[0] : skill.color;
  };

  return (
    <article
      className={`
        relative z-10 w-full
        rounded-2xl
        p-4 pt-24
        sm:p-6 sm:pt-28
        md:p-8 md:pt-32
        lg:p-10 lg:pt-32
        xl:p-12 xl:pt-32
        grid grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-4
        ${
          theme === "dark"
            ? "bg-[--blackblue] dark-mode-shadow"
            : "bg-[--icewhite] dark-shadow"
        }
      `}
    >
      {/* TITLE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center w-full px-4">
        <p
          className="
            font-black
            text-2xl
            sm:text-3xl
            md:text-4xl
            break-words
          "
        >
          <span className="text-[--verdementa]">&lt;</span>

          {skillsData[0].skillsTitle}

          <span className="text-[--verdementa]">/&gt;</span>
        </p>
      </div>

      {/* SKILLS */}
      {skillsData[0].skills.map((skill, index) => (
        <div
          key={index}
          className={`
            skill-item
            cursor-pointer
            flex flex-col items-center justify-center
            gap-3 sm:gap-4 md:gap-6
            rounded-2xl
            border-[0.25rem]
            p-4 sm:p-5 md:p-6
            text-center
            transition-all duration-300
            ${theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"}
          `}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={skill.title}
          style={{
            borderColor: getSkillColor(theme, skill),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";

            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${getSkillColor(theme, skill)}b3`,
            );
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = "";

            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit",
            );
          }}
        >
          <img
            src={getSkillIconSrc(theme, skill)}
            alt={`${skill.title}-icon`}
            className="
              h-14
              sm:h-16
              md:h-20
              lg:h-24
              xl:h-28
              object-contain
            "
          />

          <h3
            className="
              text-sm
              sm:text-base
              md:text-lg
              font-semibold
            "
          >
            {skill.title}
          </h3>
        </div>
      ))}
    </article>
  );
};

export default SkillSection;
