import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // 환경변수에서 EmailJS 설정 가져오기
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

      // 환경변수가 설정되지 않은 경우 에러 처리
      if (!serviceId || !templateId || !publicKey) {
        console.error('환경변수 누락:', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey });
        throw new Error('EmailJS 환경변수가 설정되지 않았습니다. .env 파일을 확인해주세요.');
      }

      // EmailJS 라이브러리 동적 import
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          title: formData.title,
          message: formData.message,
          to_email: contactEmail || 'p990805@gmail.com',
          reply_to: formData.email || '', // 답장용 이메일 (선택사항)
        },
        publicKey
      );

      console.log('이메일 발송 성공:', result);
      setSubmitStatus('success');
      setFormData({ name: '', title: '', message: '' }); // 폼 초기화
      
    } catch (error) {
      console.error('이메일 발송 실패:', error);
      setSubmitStatus('error');
      
      // 개발 모드에서만 상세 에러 표시
      if (import.meta.env.VITE_DEV_MODE === 'true') {
        console.error('상세 에러 정보:', {
          message: error.message,
          stack: error.stack,
          envCheck: {
            serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? '설정됨' : '누락',
            templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '설정됨' : '누락',
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '설정됨' : '누락'
          }
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 flex items-center justify-center p-8 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Left Side - Contact Info */}
        <div className="contact-left flex flex-col justify-center items-start space-y-8 text-white">
          <div className="space-y-4">
            <h2 className="text-6xl lg:text-7xl font-bold tracking-tight">
              CONTACT 
              <span className="text-yellow-400 ml-4">✉</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-300 font-light">
              Thank you : )
            </p>
          </div>
          
          {/* Decorative Image/Icon Area */}
          <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-4xl lg:text-6xl">💌</div>
          </div>
          
          {/* Additional Contact Info */}
          <div className="space-y-2 text-gray-300">
            <p className="text-lg">언제든지 연락주세요!</p>
            <p className="text-base">궁금한 점이나 협업 제안이 있으시면</p>
            <p className="text-base">아래 양식을 통해 메시지를 보내주세요.</p>
            
            {/* Direct Contact Info */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">직접 연락:</p>
              <a 
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'p990805@gmail.com'}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {import.meta.env.VITE_CONTACT_EMAIL || 'p990805@gmail.com'}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right flex items-center justify-center">
          <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-2xl"
            data-netlify="true" // Netlify Forms 사용 시 (선택사항)
            name="contact" // Netlify Forms 사용 시 (선택사항)
          >
            {/* Hidden field for Netlify (선택사항) */}
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
              />
              
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                cols="30"
                rows="8"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? '전송 중...' : 'SEND'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-green-600 text-center font-medium">
                메시지가 성공적으로 전송되었습니다! 🎉
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-600 text-center font-medium">
                전송 중 오류가 발생했습니다. 다시 시도해주세요. 😔
                {import.meta.env.VITE_DEV_MODE === 'true' && (
                  <div className="text-xs mt-2 text-gray-600">
                    개발 모드: 콘솔에서 상세 에러를 확인하세요.
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;