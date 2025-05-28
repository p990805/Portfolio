const ThankYouPage = () => {
  return (
    <article className="relative h-screen flex items-center justify-center flex-col px-10 pt-10 gap-20 max-sm:pt-5 max-sm:px-5 bg-gray-900">
      {/* Background Image */}
      <div className="absolute bg-cover bg-center top-0 bottom-0 left-0 right-0 z-[-1] bg-gradient-to-br from-blue-50 to-purple-50"></div>
      
      {/* Main Content */}
      <div className="w-full flex items-center justify-center flex-col gap-10 animate-fade-in">
        <div className="w-full flex items-center justify-center flex-col gap-10">
          {/* Thank You Title */}
          <h2 className="text-5xl text-white font-normal mb-6 relative z-10 w-full text-center max-sm:text-xl max-lg:text-3xl">
            봐주셔서 감사합니다 :)
            <div className="absolute z-[-1] top-0 left-2/4 w-full overflow-hidden translate-y-[-105%] translate-x-[-50%]">
              <p className="text-[10rem] font-black text-white leading-[1] max-sm:text-[4rem] max-lg:text-[6rem]">
                Thank You
              </p>
            </div>
          </h2>
          
          {/* Description */}
          <p className="font-normal text-xl text-gray-300 text-center max-md:text-sm max-lg:text-base">
            백엔드 개발자로 성장하기 위해 지속적으로 현재 기술 스택에 대해 깊게 공부하고,<br />
            좋은 서비스를 만들고 싶습니다.
          </p>
          
        
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full">
        <footer className="relative z-1 px-10 py-10 flex flex-col gap-2 items-center justify-center">
          <p className="text-gray-400 text-sm text-center">
            Copyright 2025.  JuchanPark all rights reserved.<br />
          </p>
        </footer>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </article>
  );
};

export default ThankYouPage;