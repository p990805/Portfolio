import { User } from "lucide-react";

const ProfileCard = ({ personalInfo }) => {
  return (
    <div className="text-center mb-8">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
        <User className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {personalInfo.name}
      </h1>
      <p className="text-gray-600 font-medium">{personalInfo.role}</p>
      <p className="text-sm text-gray-500 mt-1">{personalInfo.motto}</p>
    </div>
  );
};
export default ProfileCard;
