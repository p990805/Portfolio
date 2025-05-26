const TechStack = ({ techStacks }) => {
  const categoryColors = {
    language: "bg-red-100 text-red-800",
    frontend: "bg-blue-100 text-blue-800",
    backend: "bg-green-100 text-green-800",
    devops: "bg-purple-100 text-purple-800",
    database: "bg-yellow-100 text-yellow-800",
  };

  const categoryNames = {
    language: "Language",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    database: "Database",
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
        기술 스택
      </h2>
      {Object.entries(techStacks).map(([category, skills]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">
            {categoryNames[category]}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`px-2 py-1 text-xs rounded-full font-medium transition-all hover:scale-105 ${
                  categoryColors[category] || "bg-gray-100 text-gray-800"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TechStack;
