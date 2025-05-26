import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
export default ProjectList;
