const FilterButtons = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    { key: "all", label: "전체 프로젝트" },
    { key: "backend", label: "백엔드" },
    { key: "GUI Application", label: "GUI" },
    { key: "frontend", label: "프론트엔드"},
    { key: "infra", label: "인프라"},
    { key: "personal", label: "개인 프로젝트" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => setSelectedFilter(filter.key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedFilter === filter.key
              ? "bg-blue-600 text-white shadow-md transform scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
export default FilterButtons;
