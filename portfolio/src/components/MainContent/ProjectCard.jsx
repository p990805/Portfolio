import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const typeStyles = {
    team: "bg-emerald-100 text-emerald-800",
    personal: "bg-violet-100 text-violet-800",
    company: "bg-orange-100 text-orange-800",
  };

  const typeLabels = {
    team: "팀 프로젝트",
    personal: "개인 프로젝트",
    company: "회사 프로젝트",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <span
              className={`px-2 py-1 text-xs rounded-full font-medium ${
                typeStyles[project.type] || typeStyles.personal
              }`}
            >
              {typeLabels[project.type] || typeLabels.personal}
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium mb-2">
            {project.period}
          </p>
          <p className="text-gray-700 font-medium">{project.description}</p>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.demo && (
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          )}
          {project.github && (
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Github className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {project.details.map((detail, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 flex items-start leading-relaxed"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            {detail}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
