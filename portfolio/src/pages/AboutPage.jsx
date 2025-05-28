const AboutPage = () => {

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
                <h5 className="text-2xl font-bold pb-6">Q. 백엔드 개발을 희망하는 이유는 무엇인가요?</h5>
                <p className="leading-relaxed">
                    현재는 프론트엔드 중심의 프로젝트 경험을 가지고 있지만, 개발을 해오며 점점 백엔드에 더 큰 흥미를 느끼게 되었습니다.<br/>
                    <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">시스템의 구조를 설계하고, 기능을 하나씩 구현하면서 전체 흐름을 조립해나가는 과정에서 깊은 몰입과 성취감</span> 을 느낄 수 있었습니다.<br/>
                    데이터 흐름, 인증, API 설계, 서버 동작 원리 등 기본적인 구조부터 고민하고 직접 구현해보며, 단순히 화면을 만드는 것을 넘어 <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md font-bold mx-1">서비스의 본질을 설계 </span>한다는 점에서 큰 매력을 느꼈습니다.<br/>
                    이러한 경험을 통해, 저는 백엔드 개발자로서 더 깊이 있는 성장을 이루고 싶다는 확신을 갖게 되었고, 이를 위해 Spring Boot와 데이터베이스 설계, 인증/인가, RESTful API 구축 등을 지속적으로 학습하고 있습니다.
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
                  { name: "JAVA", percent: 80, description: "알고리즘 문제 해결과 백엔드 개발에 주로 사용하는 언어입니다. 객체지향 설계에 익숙하며, Spring Boot 기반의 웹 애플리케이션을 개발할 수 있습니다."},
                  { name: 'Python', percent: 70, description: "초기에 개발을 배울 때 사용한 언어이며, PyQt 라이브러리를 활용해 삼성전자 기업연계 프로젝트를 수행한 경험이 있습니다." },
                  { name: 'JavaScript', percent: 70, description: "ES6+ 문법을 활용해 개발할 수 있으며, 백엔드 API를 연동하고 React 프레임워크를 이용한 프로젝트 경험이 있습니다." },
                  { name: 'Spring Boot', percent: 75, description: "주력 프레임워크로 사용하고 있으며, Spring Security를 활용해 JWT 및 OAuth 2.0 기반 인증 기능을 구현한 경험이 있습니다. 현재도 Spring 기반 프로젝트를 진행 중입니다." },
                  { name: 'React', percent: 75, description: "컴포넌트 기반 아키텍처로 프로젝트를 개발하였으며, 주요 React Hook과 Redux Toolkit을 활용한 상태 관리 경험이 있습니다." },
                  { name: 'Git', percent: 70, description: '프로젝트를 진행하면서 Gitlab과 Github를 이용하였으며 Git을 활용한 버전 관리와 협업, 브랜치 전략을 이해하고 실무에 적용합니다.' },
                  { name: 'JIRA', percent: 70, description: "애자일 방식의 프로젝트 관리 도구로 Jira를 활용하여 스토리 포인트 기반의 작업 분배와 번다운 차트를 통한 진행 상황 시각화를 수행하였습니다. 팀 내 커뮤니케이션, 우선순위 관리, 스프린트 운영 등 전반적인 협업 프로세스를 경험하였습니다." },
                ].map((skill, index) => (
                  <li key={index} className="mb-8">
                    <div className="skill-name text-xl font-bold text-gray-200 mb-3">
                      {skill.name}
                    </div>
                    <div className="ability-bar mb-3">
                      <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                          style={{ width: `${skill.percent}%` }}
                        >
                          <div className="ability-percent absolute right-2 top-0 h-full flex items-center">
                            <span className="percent text-xs font-bold text-white">
                              {skill.percent}%
                            </span>
                          </div>
                        </div>
                      </div>
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