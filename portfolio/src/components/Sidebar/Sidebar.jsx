import ProfileCard from "./ProfileCard";
import ContactInfo from "./ContactInfo";
import TechStack from "./TechStack";

const Sidebar = ({ personalInfo, techStacks }) => {
  return (
    <aside className="w-80 bg-white shadow-lg min-h-screen sticky top-0 overflow-y-auto">
      <div className="p-8 space-y-8">
        <ProfileCard personalInfo={personalInfo} />
        <ContactInfo personalInfo={personalInfo} />
        <TechStack techStacks={techStacks} />
      </div>
    </aside>
  );
};
export default Sidebar;
