import {
  ExternalLink,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  AlertTriangle,
  Shield,
  User,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import landingPageEn from "../assets/landing-page-en.png";
import landingPageEs from "../assets/landing-page-es.png";
import piranhaPlannerEn from "../assets/piranha-planner-en.png";
import piranhaPlannerEs from "../assets/piranha-planner-es.png";
import plataformaCentral from "../assets/plataforma-central.png";
import conectaCiudadFrontend from "../assets/conecta-ciudad-frontend.png";
import conectaCiudadBackend from "../assets/conecta-ciudad-backend.png";

const imageMap = {
  landingPageEn,
  landingPageEs,
  piranhaPlannerEn,
  piranhaPlannerEs,
  plataformaCentral,
  conectaCiudadFrontend,
  conectaCiudadBackend,
  project3Preview: null,
};

const ProjectCard = ({ project }) => {
  const { t } = useTranslation("projects");
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);

  const MAX_HEIGHT = 80;

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current && contentRef.current) {
        const element = descriptionRef.current;
        const scrollHeight = element.scrollHeight;
        const clientHeight = element.clientHeight;

        setShouldTruncate(scrollHeight > clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [project.description]);

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getReleaseStyle = (release) => {
    switch (release) {
      case "stable":
        return {
          bgColor: "bg-slate-700/80",
          textColor: "text-emerald-300",
          borderColor: "border-slate-600",
          icon: Shield,
          label: t("stable"),
        };
      case "beta":
        return {
          bgColor: "bg-slate-700/80",
          textColor: "text-blue-300",
          borderColor: "border-slate-600",
          icon: Zap,
          label: t("beta"),
        };
      case "alpha":
        return {
          bgColor: "bg-slate-700/80",
          textColor: "text-amber-300",
          borderColor: "border-slate-600",
          icon: AlertTriangle,
          label: t("alpha"),
        };
      default:
        return {
          bgColor: "bg-slate-700/80",
          textColor: "text-slate-300",
          borderColor: "border-slate-600",
          icon: Clock,
          label: t("unknown"),
        };
    }
  };

  const getStatusStyle = (status) => {
    const styles = {
      completed: {
        bgColor: "bg-slate-700/80",
        textColor: "text-emerald-300",
        borderColor: "border-slate-600",
        icon: CheckCircle,
        label: t("completed"),
      },
      planned: {
        bgColor: "bg-slate-700/80",
        textColor: "text-blue-300",
        borderColor: "border-slate-600",
        icon: Clock,
        label: t("planned"),
      },
    };

    return (
      styles[status] || {
        bgColor: "bg-slate-700/80",
        textColor: "text-amber-300",
        borderColor: "border-slate-600",
        icon: Clock,
        label: t("development"),
      }
    );
  };

  const releaseStyle = getReleaseStyle(project.release);
  const statusStyle = getStatusStyle(project.status);
  const ReleaseIcon = releaseStyle.icon;
  const StatusIcon = statusStyle.icon;

  const projectImage = project.imageKey ? imageMap[project.imageKey] : null;

  return (
    <div className="group bg-gray-800 rounded-2xl overflow-hidden transform hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 h-full flex flex-col">
      <div className="h-48 relative overflow-hidden flex-shrink-0">
        {projectImage && !imageError ? (
          <>
            <img
              src={projectImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <>
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div className="transform group-hover:scale-100 transition-transform duration-300">
            <div
              className={`flex items-center space-x-1.5 ${statusStyle.bgColor} ${statusStyle.textColor} px-2.5 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md ${statusStyle.borderColor} border shadow-lg`}
            >
              <StatusIcon className="w-3.5 h-3.5" />
              <span>{statusStyle.label}</span>
            </div>
          </div>

          {project.release && (
            <div className="transform group-hover:scale-100 transition-transform duration-300">
              <div
                className={`flex items-center space-x-1.5 ${releaseStyle.bgColor} ${releaseStyle.textColor} px-2.5 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md ${releaseStyle.borderColor} border shadow-lg`}
              >
                <ReleaseIcon className="w-3.5 h-3.5" />
                <span>{releaseStyle.label}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="h-8 flex items-start mb-3 flex-shrink-0">
          <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
        </div>

        <div className="flex-grow mb-4" ref={contentRef}>
          <div
            ref={descriptionRef}
            className={`text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-2 ${
              !isExpanded ? "overflow-hidden text-ellipsis" : ""
            }`}
            style={{
              maxHeight: !isExpanded ? `${MAX_HEIGHT}px` : "none",
              transition: "max-height 0.3s ease-in-out",
              display: !isExpanded ? "-webkit-box" : "block",
              WebkitLineClamp: !isExpanded ? 3 : "none",
              WebkitBoxOrient: !isExpanded ? "vertical" : "initial",
            }}
          >
            <p>{project.description}</p>
          </div>

          {shouldTruncate && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="inline-flex items-center space-x-1 text-purple-400 cursor-pointer hover:text-purple-300 text-sm transition-colors duration-300 group/btn"
            >
              <span>{isExpanded ? t("showLess") : t("showMore")}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover/btn:scale-105 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover/btn:scale-105 transition-transform duration-300" />
              )}
            </button>
          )}
        </div>

        <div className="min-h-[60px] flex flex-wrap gap-2 items-start flex-shrink-0 mb-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1.5 bg-slate-700/60 text-slate-300 text-sm rounded-lg border border-slate-600/50 hover:bg-slate-600/60 hover:border-slate-500/50 hover:text-slate-200 transition-all duration-300 transform hover:scale-100 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.demoCredentials && project.demoCredentials.length > 0 && (
          <div className="mb-4 flex-shrink-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowCredentials(!showCredentials);
              }}
              className="w-full flex items-center justify-between bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-600 hover:to-purple-600 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] border border-indigo-500/30 group/cred cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{t("demoCredentials")}</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  showCredentials ? "rotate-90" : ""
                }`}
              />
            </button>

            {showCredentials && (
              <div className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-300">
                {project.demoCredentials.map((credential, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-3 space-y-2"
                  >
                    {credential.role && (
                      <div className="flex items-center justify-between pb-2 border-b border-slate-700/50">
                        <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                          {credential.role}
                        </span>
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center justify-between group/field">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-400 mb-0.5">
                            {t("email")}
                          </p>
                          <p className="text-sm text-gray-200 font-mono truncate">
                            {credential.email}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copyToClipboard(credential.email, `email-${index}`);
                          }}
                          className="ml-2 p-2 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                          title={t("copyCredentials")}
                        >
                          {copiedField === `email-${index}` ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 group-hover/field:text-gray-200" />
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-between group/field">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-400 mb-0.5">
                            {t("password")}
                          </p>
                          <p className="text-sm text-gray-200 font-mono truncate">
                            {credential.password}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copyToClipboard(
                              credential.password,
                              `password-${index}`
                            );
                          }}
                          className="ml-2 p-2 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                          title={t("copyCredentials")}
                        >
                          {copiedField === `password-${index}` ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 group-hover/field:text-gray-200" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex-shrink-0 mt-auto">
          {project.link || project.repository ? (
            project.link && project.repository ? (
              <div className="flex sm:justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-center space-x-2 w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-100 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span>{t("viewProject")}</span>
                  <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-center space-x-2 w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-100 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <span>{t("viewRepository")}</span>
                  <LuGithub className="w-4 h-4 group-hover:scale-100 transition-transform duration-300" />
                </a>
              </div>
            ) : (
              <div className="flex justify-center">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-100 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <span>{t("viewProject")}</span>
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ) : (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-100 hover:shadow-lg hover:shadow-gray-500/25"
                  >
                    <span>{t("viewRepository")}</span>
                    <LuGithub className="w-4 h-4 group-hover:scale-100 transition-transform duration-300" />
                  </a>
                )}
              </div>
            )
          ) : (
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center text-center space-x-2 bg-gray-600/50 text-gray-400 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                <Clock className="w-4 h-4" />
                <span>{t("comingSoon")}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
