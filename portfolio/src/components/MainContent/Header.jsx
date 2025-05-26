const Header = ({ personalInfo }) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {personalInfo.role}{" "}
        <span className="text-blue-600">{personalInfo.name}</span>의
        <br />
        포트폴리오입니다
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl whitespace-pre-line">
        {personalInfo.description}
      </p>
    </div>
  );
};
export default Header;
