import React from 'react';
import { ChevronUp } from 'lucide-react';

const MainPage = () => {
  return (
    <main className="h-screen flex items-center flex-col justify-between bg-gray-100 px-10 pt-10 sticky top-0 overflow-hidden relative">
      {/* Background */}
      <div 
        className="absolute bg-cover bg-center top-0 bottom-0 left-0 right-0 z-[-1]"
        style={{
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.1
        }}
      />

      {/* Top Navigation Links */}
      <div className="flex gap-5 w-full z-20">
        <div className="relative flex justify-center group">
          <a 
            href="https://github.com/p990805" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex gap-1 items-center flex-col z-20 font-medium py-1 px-2 transition-all ease-in-out duration-300 hover:text-white after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:z-[-1] after:w-full after:h-1 after:bg-black after:block after:transition-all after:ease-in-out after:duration-300 hover:after:h-full"
          >
            GitHub
          </a>
          <div className="fixed flex items-center justify-center overflow-hidden rounded px-2 py-1 translate-y-[140%] invisible z-10 after:absolute after:flex after:left-0 after:top-0 after:right-0 after:bottom-0 after:w-full after:h-full after:bg-gray-800 after:opacity-80 after:z-[-1] group-hover:visible">
            <span className="text-xs text-white">GitHub 가기</span>
          </div>
        </div>
        
        <div className="relative flex justify-center group">
          <a 
            href="https://p990805.tistory.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex gap-1 items-center flex-col z-20 font-medium py-1 px-2 transition-all ease-in-out duration-300 hover:text-white after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:z-[-1] after:w-full after:h-1 after:bg-black after:block after:transition-all after:ease-in-out after:duration-300 hover:after:h-full"
          >
            Tstory
          </a>
          <div className="fixed flex items-center justify-center overflow-hidden rounded px-2 py-1 translate-y-[140%] invisible z-10 after:absolute after:flex after:left-0 after:top-0 after:right-0 after:bottom-0 after:w-full after:h-full after:bg-gray-800 after:opacity-80 after:z-[-1] group-hover:visible">
            <span className="text-xs text-white">블로그 가기</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="absolute top-50 flex items-center flex-col mb-20 w-full mt-[calc(100vh-85vh)] max-sm:mt-[calc(100vh-90vh)]">
        <div className="relative w-full">
          <h2 className="text-5xl text-black font-normal mb-6 relative z-10 w-full text-center max-sm:text-xl max-lg:text-3xl">
            팀원들이 가장 신뢰하는 개발자 <strong className="font-black">박주찬</strong>입니다.
            <div className="absolute z-[-1] top-0 left-1/2 w-full overflow-hidden translate-y-[-105%] translate-x-[-50%]">
              <p className="text-[10rem] font-black text-white leading-[1] max-sm:text-[4rem] max-lg:text-[6rem] select-none">
                Developer
              </p>
            </div>
          </h2>
        </div>
        
        <p className="font-normal text-xl text-gray-800 text-center max-md:text-sm max-lg:text-base mb-2">
          <strong className="font-bold text-[106%]">강한 팀워크와 협업 중심의 태도로 </strong>3회 연속 프로젝트 베스트 멤버 선정,
        </p>
        <p className="font-normal text-xl text-gray-800 text-center max-md:text-sm max-lg:text-base">
          포기하지 않고 <strong className="font-bold text-[106%]">책임감</strong>있게 일하는 개발자입니다.
        </p>
      </section>


      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 translate-x-[-50%] z-20 flex flex-col items-center rotate-180 animate-bounce">
        <ChevronUp className="text-black h-4 mb-1" strokeWidth={3} />
        <ChevronUp className="text-black w-6 h-4" strokeWidth={3} />
      </div>

      {/* Update Date */}
      <div className="absolute left-10 bottom-10 max-sm:left-5 max-sm:bottom-5 z-20">
        <span className="block text-base text-gray-500 max-sm:text-sm">
          update. 25. 05. 28
        </span>
      </div>
    </main>
  );
};

export default MainPage;