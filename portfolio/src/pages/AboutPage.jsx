import React from 'react';

const AboutPage = () => {
  // 별점 컴포넌트
  const StarRating = ({ rating, maxStars = 5 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {/* 꽉 찬 별들 */}
        {[...Array(fullStars)].map((_, index) => (
          <span 
            key={`full-${index}`} 
            className="text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            ★
          </span>
        ))}
        
        {/* 반 별 */}
        {hasHalfStar && (
          <span className="relative text-xl">
            <span className="text-gray-600">★</span>
            <span 
              className="absolute top-0 left-0 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{ 
                width: '50%',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}
            >
              ★
            </span>
          </span>
        )}
        
        {/* 빈 별들 */}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-600 text-xl">★</span>
        ))}
        
        {/* 숫자 표시 */}
        <span className="ml-2 text-sm text-gray-400">
          {rating.toFixed(1)} / {maxStars}
        </span>
      </div>
    );
  };

  return (
    <main id="aboutme" className="relative flex items-center flex-col justify-center bg-gray-900 px-10 pt-10 min-h-screen max-lg:h-auto max-lg:py-20 z-10">
      {/* Page Title */}
      <h2 className="absolute top-10 left-10 text-gray-300 font-black text-6xl max-lg:flex-col max-lg:static max-lg:w-full max-lg:text-4xl max-lg:mb-10">
        About me
      </h2>

      <div className="flex flex-col gap-20 text-gray-300 items-center py-20 max-w-6xl mx-auto">
        {/* Profile Section */}
        <section className="flex flex-col gap-20 text-gray-300 items-center py-20">
          {/* Interview Section */}
          <div className="flex flex-col gap-20 w-full max-w-4xl">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl font-black text-gray-200 pb-8">Interview</h3>
              
              {/* Q&A Items */}
              <div className="relative text-base mb-5 bg-gray-200 text-gray-900 p-5 rounded-2xl">
                <h5 className="text-2xl font-bold pb-6">Q. 개발에 있어 가장 중요하게 생각하는 것이 있다면?</h5>
                <p className="leading-relaxed">
                  개발은  
                  <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">
                    끝이 아니라 시작
                  </span>
                  이라고 생각합니다.<br/>
                  과거에는 프로젝트의 마감일만을 목표로 삼아, 일단 완성에만 집중하고 오류가 드러나지만 않으면 된다는 안일한 태도를 가졌습니다.<br/>
                  그러나<span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">삼성전자 기업연계 프로젝트에 참여</span>하면서, 제가 작성한 코드를 직접 인수인계하고 운영까지 책임져야 하는 상황을 경험했습니다.<br/>
                  그 과정에서 그동안 미뤄뒀던 버그와 부족한 문서화가 큰 부담이 되었고, 그제야 깨달았습니다. <br/>
                  <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">개발은 단순히 작동하는 코드를 만드는 것이 아니라, 그 이후의 유지보수와 협업까지 고려한 과정</span>이라는 것을요.<br/>
                  그래서 지금은 초기 개발 단계부터 코드의 품질, 명확한 구조, 주석과 문서화, 그리고 협업을 고려한 개발 문화를 더욱 중요하게 생각하고 있습니다.
                </p>
              </div>

              <div className="relative text-base mb-5 bg-gray-200 text-gray-900 p-5 rounded-2xl">
                <h5 className="text-2xl font-bold pb-6">Q. 비전공자가 개발자가 되기로 결심한 이유가 무엇인지?</h5>
                <p className="leading-relaxed">
                  저는 치기공학과를 전공하고 관련 업무를 해왔습니다. 그런데 어느 순간부터 업무 전반이 점점 <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">디지털화되고 자동화</span>되는 것을 실감하게 되었고, 특히 AI 기술이 빠르게 발전하는 모습을 보면서 큰 충격과 동시에 흥미를 느꼈습니다.<br/>
                  ‘나도 이런 기술을 활용해서 무언가 만들어보고 싶다’는 마음이 들었고, 그렇게 개발 공부를 시작하게 되었습니다. 처음에는 간단한 AI 활용 프로그램을 만들고 싶다는 생각으로 시작했지만, <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">Java, Python, JavaScript를 배우며 웹 개발을 접하게 되었고</span>, 화면을 직접 만들고 동작하게 만드는 과정이 너무 재미있고 저와 잘 맞는다는 걸 느꼈습니다.<br/>
                  <br/>
                </p>
              </div>


              <div className="relative text-base mb-5 bg-gray-200 text-gray-900 p-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                <h5 className="text-2xl font-bold pb-6">Q. 자기계발을 위해 어떤 것들을 해왔는지?</h5>
                <p className="leading-relaxed">
                  <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">스터디를 통해 기술 교류와 인터넷 강의를 통한 지속적인 학습</span>을 진행하고 있으며, 
                  <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">
                    매일 개발하며 깃허브에 기록을 남기고 있으며
                  </span>
                  다양한 관점에서 피드백을 받으며 개발 과정에서 개선할 점을 개선해가며 성장하려고 노력하고 있습니다.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex gap-3 w-full flex-col">
              <h3 className="text-4xl font-black text-gray-200 pb-8">Main Skills</h3>
              <ul className="space-y-6">
                {[
                  { name: "JAVA", rating: 3.0, description: "알고리즘 문제 해결과 백엔드 개발에 주로 사용하는 언어입니다. 객체지향 설계에 익숙하며, Spring Boot 기반의 웹 애플리케이션을 개발할 수 있습니다."},
                  { name: 'Python', rating: 2.8, description: "초기에 개발을 배울 때 사용한 언어이며, PyQt 라이브러리를 활용해 삼성전자 기업연계 프로젝트를 수행한 경험이 있습니다." },
                  { name: 'JavaScript', rating: 3.0, description: "ES6+ 문법을 활용해 개발할 수 있으며, 백엔드 API를 연동하고 React 프레임워크를 이용한 프로젝트 경험이 있습니다." },
                  { name: 'Spring Boot', rating: 3.0, description: "주력 프레임워크로 사용하고 있으며, Spring Security를 활용해 JWT 및 OAuth 2.0 기반 인증 기능을 구현한 경험이 있습니다. 현재도 Spring 기반 프로젝트를 진행 중입니다." },
                  { name: 'React', rating: 3.3, description: "컴포넌트 기반 아키텍처로 프로젝트를 개발하였으며, 주요 React Hook과 Redux Toolkit을 활용한 상태 관리 경험이 있습니다." },
                  { name: 'Git', rating: 3.0, description: '프로젝트를 진행하면서 Gitlab과 Github를 이용하였으며 Git을 활용한 버전 관리와 협업, 브랜치 전략을 이해하고 실무에 적용합니다.' },
                  { name: 'JIRA', rating: 3.0, description: "애자일 방식의 프로젝트 관리 도구로 Jira를 활용하여 스토리 포인트 기반의 작업 분배와 번다운 차트를 통한 진행 상황 시각화를 수행하였습니다. 팀 내 커뮤니케이션, 우선순위 관리, 스프린트 운영 등 전반적인 협업 프로세스를 경험하였습니다." },
                ].map((skill, index) => (
                  <li key={index} className="mb-8">
                    <div className="skill-name text-xl font-bold text-gray-200 mb-3">
                      {skill.name}
                    </div>
                    <div className="ability-rating mb-3">
                      <StarRating rating={skill.rating} />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;