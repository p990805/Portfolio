import React from 'react';
import { X } from 'lucide-react';

const ProjectRetrospectiveModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  // 각 프로젝트별 회고록 데이터
  const retrospectiveData = {
    "POSS - 삼성전자 생산계획 최적화 시스템": {
      period: "2024.09 ~ 2024.11 (3개월)",
      teamSize: "6명",
      role: "팀장 및 GUI 개발 담당",
      challenges: [
        "PyQt5를 처음 사용하면서 GUI 프레임워크에 대한 이해 부족",
        "QHD와 FHD 해상도 간 UI 일관성 문제로 인한 사용자 경험 저하",
        "삼성전자 담당자와의 직접적인 소통에서 오는 부담감과 책임감",
        "PyQt 애플리케이션에서 전역 상태 관리의 복잡성"
      ],
      solutions: [
        "PyQt5 공식 문서와 예제 코드를 통한 집중적인 학습 및 실습",
        "해상도에 따라 width, height, 폰트 크기를 자동 조절하는 유틸리티 메서드 개발",
        "Redux 개념을 참고한 static 메서드 기반의 중앙 집중식 상태 관리 시스템 구현",
        "실사용자 피드백을 통한 지속적인 시스템 개선"
      ],
      achievements: [
        "기업 연계 프로젝트 성공적 완료 및 실제 운영 환경 배포",
        "해상도 독립적인 UI 시스템 구축으로 사용자 경험 통일성 확보",
        "PyQt5 GUI 개발 전문성 습득 및 상태 관리 아키텍처 설계 능력 향상",
        "팀장으로서 프로젝트 관리 및 커뮤니케이션 스킬 발전"
      ],
      lessons: [
        "개발은 완성이 아닌 시작이라는 점을 깨달음",
        "사용자 중심 설계와 크로스 플랫폼 호환성의 중요성",
        "실무 환경에서의 협업과 책임감의 무게 경험",
        "기술적 도전과 비즈니스 요구사항 간의 균형점 찾기"
      ]
    },
    "우꿈다 - 우리들의 꿈꾸는 다이어리": {
      period: "2024.10 ~ 2024.11 (6주)",
      teamSize: "6명",
      role: "인프라 및 DevOps 담당",
      challenges: [
        "MSA 아키텍처의 복잡한 컨테이너화 및 서비스 간 통신 관리",
        "Jenkins를 활용한 CI/CD 파이프라인 구축의 복잡성",
        "GitLab과 Mattermost 연동을 통한 실시간 알림 시스템 구현",
        "모니터링 시스템 구축과 성능 최적화"
      ],
      solutions: [
        "Docker 및 Docker Compose 기반 MSA 아키텍처 설계 및 배포 자동화",
        "Jenkins를 통한 자동 빌드·테스트·배포 프로세스 구현",
        "GitLab Webhook과 Mattermost API 연동으로 실시간 코드 이벤트 알림 개발",
        "Grafana와 Prometheus를 활용한 종합 모니터링 대시보드 구성"
      ],
      achievements: [
        "SSAFY 특화 프로젝트에서 우수상 수상",
        "완전 자동화된 CI/CD 파이프라인 구축으로 개발 생산성 향상",
        "실시간 모니터링 시스템으로 서비스 안정성 확보",
        "Redux-toolkit 기반 상태 관리와 CSS 애니메이션으로 사용자 경험 개선"
      ],
      lessons: [
        "DevOps 문화의 중요성과 자동화의 가치",
        "모니터링과 로깅의 필수성",
        "팀 커뮤니케이션 도구 연동의 효과성",
        "인프라 설계가 개발 생산성에 미치는 영향"
      ]
    },
    "티아라 - 티 없이 맑게 자라(아)라": {
      period: "2024.11 ~ 2024.12 (6주)",
      teamSize: "6명",
      role: "팀장 및 프론트엔드 개발 담당",
      challenges: [
        "WebRTC 기술에 대한 이해 부족과 실시간 스트리밍 구현의 복잡성",
        "서비스의 첫인상을 책임지는 메인 화면 UI/UX 설계의 어려움",
        "회원과 기관의 구분된 인증 시스템 구현",
        "AWS S3를 활용한 안정적인 파일 업로드 시스템 구축"
      ],
      solutions: [
        "WebRTC 공식 문서와 예제를 통한 실시간 스트리밍 및 채팅 기능 구현",
        "사용자 중심의 직관적인 메인 화면 UI/UX 설계 및 개발",
        "백엔드 API와 연동한 회원/기관 구분 인증 및 프로필 관리 시스템 구축",
        "프론트엔드와 백엔드 양쪽에서 AWS S3 연동으로 안정적인 미디어 관리 구현"
      ],
      achievements: [
        "WebRTC 기반 양방향 커뮤니케이션 서비스 성공적 구축",
        "직관적이고 사용자 친화적인 메인 화면 UI/UX 완성",
        "안정적인 회원 관리 및 파일 업로드 시스템 구현",
        "팀장으로서 프로젝트 일정 관리 및 팀원 간 협업 조율"
      ],
      lessons: [
        "새로운 기술(WebRTC) 학습 시 공식 문서와 실습의 중요성",
        "사용자 경험을 최우선으로 하는 UI/UX 설계 철학",
        "프론트엔드와 백엔드 통합 개발 경험의 가치",
        "팀 리더십과 기술적 문제 해결 능력의 균형"
      ]
    },
    "짜스 커피": {
      period: "2024.08 ~ 2024.09 (4주)",
      teamSize: "4명",
      role: "백엔드 개발 담당",
      challenges: [
        "JWT를 활용한 인증 시스템 구현의 복잡성",
        "회원정보 CRUD 로직의 안정성과 보안성 확보",
        "SSAFY 기존 시스템 개량을 위한 요구사항 분석"
      ],
      solutions: [
        "Spring Boot와 Spring Security를 활용한 JWT 기반 로그인/로그아웃 시스템 구현",
        "안전하고 효율적인 회원정보 CRUD 로직 개발",
        "기존 시스템 분석을 통한 개선점 도출 및 구현"
      ],
      achievements: [
        "안정적인 JWT 기반 인증 시스템 구축 완료",
        "효율적인 회원 관리 시스템 개발",
        "SSAFY 커피 주문 시스템 성능 및 사용성 개선"
      ],
      lessons: [
        "JWT 토큰 기반 인증의 동작 원리와 보안 중요성",
        "Spring Boot 생태계에서의 개발 효율성",
        "기존 시스템 개선 시 요구사항 분석의 중요성",
        "팀 프로젝트에서의 백엔드 개발 협업"
      ]
    },
    "포트폴리오 사이트": {
      period: "2024.12 ~ 2025.01 (개인 프로젝트)",
      teamSize: "1명 (개인)",
      role: "풀스택 개발",
      challenges: [
        "React 기반 SPA에서의 성능 최적화",
        "반응형 디자인과 다양한 디바이스 호환성",
        "이메일 전송 기능 구현과 스팸 방지"
      ],
      solutions: [
        "React.memo와 useMemo를 활용한 렌더링 최적화",
        "Tailwind CSS를 활용한 모바일 퍼스트 반응형 디자인",
        "EmailJS와 환경변수를 활용한 안전한 이메일 시스템 구축"
      ],
      achievements: [
        "개인 브랜딩을 위한 전문적인 포트폴리오 사이트 완성",
        "모던한 UI/UX와 인터랙티브한 애니메이션 구현",
        "SEO 최적화와 웹 접근성 향상"
      ],
      lessons: [
        "개인 프로젝트에서의 자기주도적 학습과 문제해결 능력",
        "사용자 중심의 디자인과 경험 설계의 중요성",
        "지속적인 유지보수와 개선의 필요성"
      ]
    }
  };

  const currentRetrospective = retrospectiveData[project.title] || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>📅 {currentRetrospective.period}</span>
              <span>👥 {currentRetrospective.teamSize}</span>
              <span>🎯 {currentRetrospective.role}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* 도전과제 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🚧 도전과제
            </h3>
            <ul className="space-y-3">
              {currentRetrospective.challenges?.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 해결방안 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              💡 해결방안
            </h3>
            <ul className="space-y-3">
              {currentRetrospective.solutions?.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 font-bold">•</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 성과 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🏆 주요 성과
            </h3>
            <ul className="space-y-3">
              {currentRetrospective.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-500 font-bold">•</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 배운점 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📚 배운 점
            </h3>
            <ul className="space-y-3">
              {currentRetrospective.lessons?.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                  <span className="text-purple-500 font-bold">•</span>
                  <span className="text-gray-700">{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectRetrospectiveModal;