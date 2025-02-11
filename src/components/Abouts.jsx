import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center text-center"
      >
        <img
          src={icon}
          alt="service-icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === "ar"; // Vérifie si la langue est arabe

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "text-right" : "text-left"}>
      {/* Section Introduction */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("Introduction")}
        </h2>
      </motion.div>

      {/* Section Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] mx-auto px-0 leading-[30px] text-center md:text-left"
      >
        {t("AboutDescription").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </motion.p>

      {/* Section des cartes */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center md:justify-start">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={t(service.title)}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
