import React, { useState, forwardRef } from 'react';
import ProjectRetrospectiveModal from './ProjectRetrospectiveModal';
import poss from "../assets/images/POSS.svg"
import uggumda from "../assets/images/uggumda.svg"
import tara from "../assets/images/tara.svg"
import pf from "../assets/images/portfolio.svg"

const ProjectSection = forwardRef((props, ref) => {
  const [projectFilter, setProjectFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "POSS - 삼성전자 생산계획 최적화 시스템",
      description: "데이터 사전점검 기능 및 알고리즘 수행결과 분석 화면 개발",
      tags: ["Team","팀장", "GUI","Python" ,"PyQt5"],
      myRole: [
        "GUI 화면 개발 (PyQt5)",
        "알고리즘 결과 시각화 기능 개발",
        "QHD와 FHD 해상도 간 UI 일관성을 위해, 해상도에 따라 width, height, 폰트 크기를 자동 조절하는 유틸리티 메서드를 구현",
        "PyQt 애플리케이션 내 전역 상태 관리를 위해, Redux 개념을 참고한 static 메서드 기반의 중앙 집중식 상태 관리 시스템 구현",
        "삼성전자 담당자와 직접 소통하여 요구사항 분석",
        "실사용자의 피드백을 통한 시스템 개선",
      ],
      githubUrl: "https://github.com/p990805/ssafyLastProject",
      image: poss
    },
    {
      title: "우꿈다 - 우리들의 꿈꾸는 다이어리",
      description: "꿈을 적으면 AI로 꿈을 영상화 시켜주고 저장하여 우주의 별자리처럼 꾸미는 프로젝트",
      tags: ["Team", "웹", "인프라", "우수상","Docker","DockerCompose","MobaXterm","Jenkins","NginX"],
      myRole: [
        "Docker 및 Docker Compose 기반으로 MSA 아키텍처의 백엔드 프로젝트 컨테이너화 및 배포 자동화 설계",
        "Jenkins를 활용한 CI/CD 파이프라인 구축을 통해 코드 변경 시 자동 빌드·테스트·배포 프로세스 구현",
        "GitLab과 Mattermost를 연동하여 코드 이벤트 발생 시 실시간 알림 전송 기능 개발 및 운영",
        "Grafana와 Prometheus를 활용한 모니터링 시스템 구축 및 대시보드 구성",
        "Redux-toolkit을 이용한 중앙 시스템 관리",
        "팀 프로젝트 내 주요 인터랙션을 위한 CSS 기반 애니메이션 설계 및 구현 담당",
      ],
      githubUrl: "https://github.com/p990805/ssafySpecializeProject",
      image: uggumda
    },
    {
      title: "티아라 - 티 없이 맑게 자라(아)라",
      description: "WebRTC를 이용한 유기견 후원 사이트 입니다.",
      tags: ["Team","팀장","웹", "WebRTC","JavaScript","React"],
      myRole: [
        "서비스의 첫인상을 책임지는 메인 화면 UI/UX 설계 및 구현",
        "WebRTC 기반의 실시간 스트리밍 및 채팅 기능 구현을 통해 양방향 커뮤니케이션 서비스 구축",
        "백엔드 API와 연동하여 회원/기관 구분에 따른 인증 및 프로필 관리(로그인, 회원가입, 정보 수정) 기능 구현",
        "AWS S3를 활용한 이미지 및 파일 업로드 기능을 프론트엔드와 백엔드에서 모두 구현하여 안정적인 미디어 관리 시스템 구축"
      ],
      githubUrl: "https://github.com/p990805/ssafyCommonProject",
      image: tara
    },
    {
      title: "짜스 커피",
      description: "SSAFY에서 현재 제공하는 커피 주문 웹사이트를 개량하여 만든 프로젝트 입니다.",
      tags: ["Team","웹","Java","JWT","Spring Boot"],
      myRole: [
        "JWT를 이용한 로그인,로그아웃 기능 구현",
        "회원정보 CRUD 로직 구현",
      ],
      githubUrl: "https://github.com/JaS-JavaStudy/jascoffee",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop"
    },
    {
      title: "포트폴리오 사이트",
      description: "저만의 포트폴리오를 만들기 위해 제작했습니다.",
      tags: ["Personal", "반응형", "포트폴리오", "사이드"],
      myRole: [
        "React 기반 SPA 개발",
        "반응형 디자인 구현",
        "EmailJS를 활용한 연락처 폼 구현",
        "애니메이션 및 인터랙션 효과 개발"
      ],
      githubUrl: "https://github.com/p990805/Portfolio",
      image: pf
    },
  ];

  // 필터링된 프로젝트 데이터
  const filteredProjects = projectData.filter(project => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'team') return project.tags.includes('Team');
    if (projectFilter === 'personal') return project.tags.includes('Personal');
    return true;
  });

  // 회고록 모달 열기
  const openRetrospectiveModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // 회고록 모달 닫기
  const closeRetrospectiveModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <article ref={ref} id="Project" className="pt-20">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      
      {/* Filter Buttons */}
      <div className="w-fit flex gap-2 items-center justify-center rounded-full px-4 py-3 bg-gray-200 max-sm:w-full mb-12">
        {[
          { key: 'all', label: 'All' },
          { key: 'team', label: 'Team' },
          { key: 'personal', label: 'Personal' }
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
      <section className="grid grid-cols-2 gap-4 pt-12 max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <section key={index} className="overflow-hidden flex flex-col justify-start gap-8 rounded bg-gray-200 relative h-[25rem] group transition-all hover:shadow-black hover:shadow-2xl hover:translate-y-[-5px]">
            {/* Hover Overlay */}
            <div className="absolute z-30 flex flex-col items-center justify-center gap-8 text-white w-full h-full p-5 bg-gray-800 bg-opacity-95 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h4 className="font-bold text-xl text-center mb-2">{project.title}</h4>
              
              {/* My Role Section */}
              <div className="w-full max-h-32 overflow-y-auto">
                <h5 className="font-semibold text-sm mb-2 text-blue-300">🔧 담당 역할</h5>
                <ul className="text-xs space-y-1">
                  {project.myRole.map((role, roleIndex) => (
                    <li key={roleIndex} className="pl-2 relative before:absolute before:w-1 before:h-1 before:bg-blue-300 before:block before:rounded-full before:left-0 before:top-2">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex gap-2 mt-2">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-2 border border-white text-white rounded text-center text-sm transition hover:bg-white hover:text-gray-900 flex items-center justify-center gap-2"
                >
                  <span>🔗</span>
                  GitHub에서 코드 보기
                </a>
                
                <button
                  onClick={() => openRetrospectiveModal(project)}
                  className="w-full p-2 bg-purple-600 text-white rounded text-center text-sm transition hover:bg-purple-700 flex items-center justify-center gap-2"
                >
                  <span>📝</span>
                  프로젝트 회고록 보기
                </button>
              </div>
            </div>

            {/* Project Image */}
            {project.image ? (
              <div className="overflow-hidden w-full h-[45%]">
                <img src={project.image} alt="thumbnail" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
              </div>
            ) : (
              <div className="w-full h-[45%] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110">
                💻
              </div>
            )}

            {/* Project Info */}
            <div className="px-5 flex flex-col justify-start gap-3 text-gray-900">
              <h4 className="font-bold text-xl">{project.title}</h4>
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

      {/* Retrospective Modal */}
      <ProjectRetrospectiveModal 
        isOpen={modalOpen}
        onClose={closeRetrospectiveModal}
        project={selectedProject}
      />
    </article>
  );
});

ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;