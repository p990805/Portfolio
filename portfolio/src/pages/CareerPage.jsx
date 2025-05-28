import React, { useState, useRef, useEffect } from 'react';
import ProjectSection from '../components/ProjectSection';
import EducationSection from '../components/EducationSction';

const CareerPage = () => {
  const [activeTab, setActiveTab] = useState('Project');
  
  // useRef 추가
  const projectRef = useRef(null);
  const educationRef = useRef(null);

  // Intersection Observer로 activeTab 업데이트
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'Project') {
              setActiveTab('Project');
            } else if (id === 'Education') {
              setActiveTab('Education');
            }
          }
        });
      },
      {
        rootMargin: '-20% 0% -20% 0%', // 상하 20% 마진으로 중앙 60% 영역에서만 감지
        threshold: 0.3 // 30% 이상 보일 때 감지
      }
    );

    // 관찰 대상 요소들
    const projectElement = projectRef.current;
    const educationElement = educationRef.current;

    if (projectElement) observer.observe(projectElement);
    if (educationElement) observer.observe(educationElement);

    // 컴포넌트 언마운트 시 observer 해제
    return () => {
      if (projectElement) observer.unobserve(projectElement);
      if (educationElement) observer.unobserve(educationElement);
      observer.disconnect();
    };
  }, []);

  // scrollToSection 함수
  const scrollToSection = (section) => {
    setActiveTab(section);
    const refs = {
      'Project': projectRef,
      'Education': educationRef
    };
    
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-gray-900 w-full flex p-10 gap-14 z-10 min-h-screen max-md:flex-col max-md:gap-0">
      {/* Navigation */}
      <nav className="sticky top-10 flex flex-col gap-3 w-auto h-screen max-md:flex-row max-md:bg-gray-900 max-md:z-20 max-md:py-3 max-md:top-0 max-md:w-full max-md:h-auto max-md:overflow-y-scroll">
        {['Project', 'Education'].map((tab) => (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className={`font-black text-6xl text-left transition max-md:text-2xl max-lg:text-5xl ${
              activeTab === tab 
                ? 'text-gray-300' 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content */}
      <section className="flex flex-col flex-1 gap-60 pb-20">
        <ProjectSection ref={projectRef} />
        <EducationSection ref={educationRef} />
      </section>
    </section>
  );
};

export default CareerPage;