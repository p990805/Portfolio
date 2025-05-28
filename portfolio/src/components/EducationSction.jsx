import React, { forwardRef } from 'react';

const EducationSection = forwardRef((props, ref) => {
  const educationData = [
    {
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
    {
      institution: "인터넷 강의 수강 내역",
      course: "2024.07 ~ ing",
      details: [
        "김영한의 자바 입문 - 코드로 시작하는 자바 첫걸음",
        "김영한의 실전 자바 - 기본편",
        "김영한의 실전 자바 - 중급 1편",
        "김영한의 실전 자바 - 중급 2편",
        "나도코딩의 자바 기본편 - 풀코스",
        "자바(Java) 알고리즘 문제풀이 입문: 코딩테스트 대비",
        "스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술",
        "스프링 핵심 원리 - 기본편",
        "비전공자도 이해할 수 있는 Nginx 입문/실전",
        "비전공자도 이해할 수 있는 Docker 입문/ 실전",
      ],
      skills: []
    },
  ];

  return (
    <article ref={ref} id="Education" className="pt-20">
      <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
      
      <div className="grid grid-cols-2 gap-4 pt-12 max-lg:grid-cols-1">
        {educationData.map((education, index) => (
          <section key={index} className="overflow-hidden flex flex-col rounded h-[30rem] bg-gray-200 relative justify-between group">
            <div className="p-5 flex flex-col gap-3 text-gray-900">
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
  );
});

EducationSection.displayName = 'EducationSection';

export default EducationSection;