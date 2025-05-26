import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const personalInfo = {
    name: "박주찬",
    role: "Backend Developer",
    motto: "다음 개발자를 위해 코딩하자",
    birthDate: "1999.08.05",
    location: "서울특별시 송파구",
    phone: "010-8508-8650",
    email: "p990805@gmail.com",
    github: "github.com/p990805",
    description:
      "안녕하세요 협업에 강한 개발자 박주찬 입니다.\n 매번 다른 6명과 함께한 프로젝트에서 3연속 베스트 멤버 수상이라는 기록이 제 협업 DNA를 증명합니다.\n 매번 새로운 팀원들과 만나 시너지를 창출하고, 함께 성장하는 것이 제 특기입니다.",
  };

  const techStacks = {
    language: ["Java", "JavaScript", "Python"],
    frontend: ["React", "Tailwind CSS", "Redux"],
    backend: ["Spring"],
    database: ["MySQL", "Redis"],
    devops: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Docker Compose",
      "NginX",
      "Jenkins",
    ],
  };

  const projects = [
    {
      id: 1,
      title: "삼성전자 기업연계 프로젝트, POSS",
      period: "2025.04.14 - 2025.05.25",
      type: "team",
      category: "GUI Application Development",
      description: "데이터 사전점검 기능 및 알고리즘 수행결과 분석 화면 개발",
      details: [
        "PyQt5를 활용한 직관적인 GUI 설계 및 삼성전자 생산계획 담당자 대상 사용성 테스트 진행",
        "Python StaticMethod 패턴을 적용한 중앙집중식 데이터 관리 시스템 구현으로 Excel 파일 및 설정값 영속화",
        "다양한 해상도(QHD/FHD) 환경에서 일관된 사용자 경험을 제공하는 반응형 UI 레이아웃 설계",
        "드래그 앤 드롭 인터랙션을 통한 데이터 조작 기능으로 사용자 편의성 및 작업 효율성 향상",
      ],
      techStack: ["Python 3.12", "PyQt5"],
      demo: "삼성전자 생산기술 연구소",
      github: "https://github.com/p990805/ssafyLastProject",
    },
    {
      id: 2,
      title: "우리들의 꿈꾸는 다이어리, 우꿈다",
      period: "2025.02.24 - 2025.04.11",
      type: "team",
      category: "Infra",
      description: "AI 기반 꿈 영상화 웹 서비스의 인프라 설계 및 운영 자동화",
      details: [
        "Certbot 기반 SSL/TLS 인증서 자동화로 HTTPS 보안 통신 환경 구축",
        "Docker & Docker Compose를 활용한 마이크로서비스 아키텍처 컨테이너화 및 오케스트레이션",
        "Jenkins 파이프라인을 통한 자동화된 CI/CD 워크플로우 구축으로 배포 프로세스 최적화",
        "Mattermost 연동을 통한 실시간 빌드 상태 알림 시스템으로 팀 협업 효율성 향상",
        "Grafana & Prometheus 기반 애플리케이션 및 인프라 메트릭 모니터링 대시보드 구성",
      ],
      techStack: [
        "Docker",
        "Docker Compose",
        "Nginx",
        "Jenkins",
        "AWS S3",
        "Grafana",
        "Prometheus",
        "Certbot",
      ],
      demo: "https://demo.com",
      github: "https://github.com/p990805/ssafySpecializeProject",
    },
    {
      id: 3,
      title: "유기견 후원 사이트, 티아라",
      period: "2025.01.06 - 2025.02.21",
      type: "team",
      category: "frontend",
      description: "WebRTC를 이용하여 스트리밍이 가능한 유기견 후원 사이트",
      details: [
        "WebRTC를 이용한 유기견 라이브 스트리밍 기능",
        "메인화면, 회원가입, 로그인, 회원정보, 예약시스템 프론트 구현",
      ],
      techStack: ["React", "Tailwind CSS"],
      demo: "https://demo.com",
      github: "https://github.com/p990805/ssafyCommonProject",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar personalInfo={personalInfo} techStacks={techStacks} />
      <MainContent
        personalInfo={personalInfo}
        projects={projects}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
};

export default Portfolio;
