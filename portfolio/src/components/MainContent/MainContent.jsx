import Header from "./Header";
import FilterButtons from "./FilterButtons";
import ProjectList from "./ProjectList";
import { Github, Mail } from "lucide-react";

const MainContent = ({
  personalInfo,
  projects,
  selectedFilter,
  setSelectedFilter,
}) => {
  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedFilter ||
            project.type === selectedFilter
        );

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Header personalInfo={personalInfo} />
        <FilterButtons
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <ProjectList projects={filteredProjects} />

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-3">
            더 많은 프로젝트와 코드가 궁금하시다면
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/p990805"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors no-underline"
            >
              <Github className="w-5 h-5" />
              GitHub 방문하기
            </a>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5" />
              연락하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
