import React, { useState, useRef, useEffect } from 'react';

const CareerPage = () => {
  const [activeTab, setActiveTab] = useState('Project');
  const [projectFilter, setProjectFilter] = useState('all');
  
  // useRef 추가
  const projectRef = useRef(null);
  const educationRef = useRef(null);

  const projectData = [
    {
      title: "POSS - 삼성전자 생산계획 최적화 시스템 ",
      description: "데이터 사전점검 기능 및 알고리즘 수행결과 분석 화면 개발",
      tags: ["팀", "GUI", "PyQt5"],
      image: null
    },
    {
      title: "우꿈다 - 우리들의 꿈꾸는 다이어리",
      description: "꿈을 적으면 AI로 꿈을 영상화 시켜주고 저장하여 우주의 별자리처럼 꾸미는 프로젝트",
      tags: ["팀", "웹", "인프라", "2등", "우수상"],
      image: null
    },
    {
      title: "티아라 - 티 없이 맑게 자라(아)라",
      description: "WebRTC를 이용한 유기견 후원 사이트 입니다.",
      tags: ["팀","웹", "WebRTC"],
      image: "https://images.unsplash.com/photo-1606016159598-234d3d9ffd50?w=400&h=200&fit=crop"
    },
    {
      title: "짜스 커피",
      description: "SSAFY에서 현재 제공하는 커피 주문 웹사이트를 개량하여 만든 프로젝트 입니다.",
      tags: ["팀"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop"
    },
    {
      title: "포트폴리오 사이트",
      description: "저만의 포트폴리오를 만들기 위해 제작했습니다.",
      tags: ["솔로", "반응형", "포트폴리오", "사이드"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop"
    },
  ];

  const educationData = [
    {
      period: "2023.02 - 2023.08",
      institution: "삼성 청년 SW.AI 아카데미",
      course: "12기 2024.07 ~ 2025.06",
      details: [
        "Python , JavaScript, SQL 등 학습",
        "1학기 6달 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍",
        "2학기 6주간 3번 6명의 팀원들과 협업 프로젝트 진행",
        "스터디에 참여하여 개발 공부를 진행하고 동료들과 원활한 소통과 커뮤니케이션을 촉진"
      ],
      skills: ['🌐', '🎨', '⚡', '⚛️', '🐙', '🖥️']
    },
  ];

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

  // 필터링된 프로젝트 데이터
  const filteredProjects = projectData.filter(project => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'team') return project.tags.includes('팀');
    if (projectFilter === 'single') return project.tags.includes('솔로');
    return true;
  });

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
        {/* Project Section */}
        <article ref={projectRef} id="Project" className="pt-20">
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
          
          {/* Filter Buttons */}
          <div className="w-fit flex gap-2 items-center justify-center rounded-full px-4 py-3 bg-gray-200 max-sm:w-full mb-12">
            {[
              { key: 'all', label: 'All' },
              { key: 'team', label: 'Team' },
              { key: 'single', label: 'Single' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setProjectFilter(filter.key)}
                className={`rounded-full px-5 py-2 transition max-sm:w-full max-sm:text-xs font-bold ${
                  projectFilter === filter.key
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-900 bg-transparent hover:bg-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <section className="grid grid-cols-4 gap-4 pt-12 max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <section key={index} className="overflow-hidden flex flex-col justify-start gap-8 rounded bg-gray-200 relative h-[25rem] group transition-all hover:shadow-black hover:shadow-2xl hover:translate-y-[-5px]">
                {/* Hover Overlay */}
                <div className="absolute z-30 flex flex-col items-center justify-center gap-10 text-white w-full h-full p-5 bg-gray-800 opacity-0 transition group-hover:opacity-100">
                  <h4 className="font-bold text-2xl text-center">{project.title}</h4>
                  <div className="w-2/3 flex flex-col gap-3">
                    <button className="p-3 border border-white text-white rounded transition hover:bg-white hover:text-gray-900">
                      자세히 보기
                    </button>
                  </div>
                </div>

                {/* Project Image */}
                {project.image ? (
                  <div className="overflow-hidden w-full h-[45%]">
                    <img src={project.image} alt="thumbnail" className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className="w-full h-[45%] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl">
                    💻
                  </div>
                )}

                {/* Project Info */}
                <div className="px-5 flex flex-col justify-start gap-3 text-gray-900">
                  <h4 className="font-bold text-2xl">{project.title}</h4>
                  <p className="text-base text-gray-600">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="absolute bottom-0 p-5 flex gap-1 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="flex items-center justify-center text-xs text-white bg-gray-800 px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </section>
        </article>

        {/* Education Section */}
        <article ref={educationRef} id="Education" className="pt-20">
          <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
          
          <div className="grid grid-cols-2 gap-4 pt-12 max-lg:grid-cols-1">
            {educationData.map((education, index) => (
              <section key={index} className="overflow-hidden flex flex-col rounded h-[30rem] bg-gray-200 relative justify-between group">
                <div className="p-5 flex flex-col gap-3 text-gray-900">
                  <span className="text-gray-600 text-sm">{education.period}</span>
                  <h4 className="font-bold text-2xl flex flex-col gap-1">
                    {education.institution}
                    <span className="text-sm text-gray-600">{education.course}</span>
                  </h4>
                  <ul className="text-base text-gray-600">
                    {education.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-gray-600 before:block before:rounded-full before:left-0 before:top-2.5 mb-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 flex gap-1">
                  {education.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative bg-black w-12 h-12 flex items-center justify-center rounded-2xl">
                      <div className="text-xl">{skill}</div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
};

export default CareerPage;