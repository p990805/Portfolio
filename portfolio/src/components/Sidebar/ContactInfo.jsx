import { Github, Mail, Calendar, MapPin, Phone } from "lucide-react";
const ContactInfo = ({ personalInfo }) => {
  const contactItems = [
    { icon: Calendar, label: "생년월일", value: personalInfo.birthDate },
    { icon: MapPin, label: "위치", value: personalInfo.location },
    { icon: Phone, label: "연락처", value: personalInfo.phone },
    { icon: Mail, label: "이메일", value: personalInfo.email },
    { icon: Github, label: "GitHub", value: personalInfo.github, isLink: true },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
        연락처
      </h2>
      <div className="space-y-3">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <item.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {item.label}
              </p>
              {item.isLink ? (
                <a
                  href={`https://${item.value}`}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm text-gray-700">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
