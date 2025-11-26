import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  Calendar,
  MapPin,
  Code2,
  Rocket,
  BriefcaseBusiness,
} from "lucide-react";

const Experience = () => {
  const { t } = useTranslation("experience");
  const [isVisible, setIsVisible] = useState(false);
  const experiences = t("experienceList", { returnObjects: true });

  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  const getTypeColor = (type) => {
    return type === "professional"
      ? "from-blue-500 to-cyan-500"
      : "from-purple-500 to-pink-500";
  };

  const getTypeIcon = (type) => {
    return type === "professional" ? <BriefcaseBusiness /> : <Rocket />;
  };

  return (
    <section id="experience" className="py-20 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("title")}
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-500 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="relative">
          <div
            className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 transition-all duration-1000 ${
              isVisible ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 200}ms`,
                  }}
                >
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-8 ${
                      isEven ? "" : "md:grid-flow-dense"
                    }`}
                  >
                    <div
                      className={`${
                        isEven ? "md:col-start-2" : "md:col-start-1"
                      }`}
                    >
                      <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform  group border border-gray-700 hover:border-purple-500/50">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-gradient-to-r ${getTypeColor(
                              exp.type
                            )} text-white font-medium`}
                          >
                            <span>{getTypeIcon(exp.type)}</span>
                            {t(`types.${exp.type}`)}
                          </span>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-400 mb-4">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-gray-500">•</span>
                              <MapPin className="w-4 h-4" />
                              <span className="text-gray-400 text-sm">
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        {exp.highlights && exp.highlights.length > 0 && (
                          <ul className="space-y-2 mb-4">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <span className="text-purple-400 mt-1">▹</span>
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex items-start gap-2">
                            <Code2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${getTypeColor(
                          exp.type
                        )} shadow-lg ring-4 ring-gray-900 transition-all duration-300 group-hover:scale-125`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-16 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 group">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transform  transition-transform duration-300"></div>
            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {t("types.professional")}
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform  transition-transform duration-300"></div>
            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {t("types.personal")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
