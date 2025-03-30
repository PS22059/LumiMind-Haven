import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';

const Banner = () => {
  const [activeContent, setActiveContent] = useState('counseling'); // counseling | friendship
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slides = ['counseling', 'friendship'];

  // Auto slide handler - Sửa lại để sử dụng trang hiện tại
  const startAutoSlide = useCallback(() => {
    return setInterval(() => {
      setIsAnimating(true);
      setActiveContent(current => {
        const currentIndex = slides.indexOf(current);
        return slides[(currentIndex + 1) % slides.length];
      });
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);
  }, [slides]);

  // Auto slide effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = startAutoSlide();
    }
    return () => {
      clearInterval(timer);
    };
  }, [isPaused, startAutoSlide]);

  const pauseAutoSlide = () => {
    setIsPaused(true);
    // Restart auto-slide after 1 second
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    pauseAutoSlide();
    setIsAnimating(true);
    setActiveContent(current => {
      const currentIndex = slides.indexOf(current);
      return slides[(currentIndex - 1 + slides.length) % slides.length];
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    pauseAutoSlide();
    setIsAnimating(true);
    setActiveContent(current => {
      const currentIndex = slides.indexOf(current);
      return slides[(currentIndex + 1) % slides.length];
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const bannerContent = {
    counseling: {
      title: "Chia sẻ tâm sự, nhận lời khuyên từ chuyên gia",
      description: "Chúng tôi lắng nghe và hỗ trợ bạn giải quyết những khó khăn trong cuộc sống, công việc và các mối quan hệ.",
      primaryButton: {
        text: "Bắt đầu tư vấn ngay",
        icon: <MessageCircle className="h-5 w-5" />
      }
    },
    friendship: {
      title: "Kết nối với những người đồng điệu",
      description: "Tìm kiếm và kết nối với những người có cùng sở thích, quan điểm sống. Chia sẻ những khoảnh khắc ý nghĩa cùng nhau.",
      primaryButton: {
        text: "Tìm bạn đồng hành",
        icon: <Users className="h-5 w-5" />
      }
    }
  };

  const currentContent = bannerContent[activeContent as keyof typeof bannerContent];

  return (
    <div className="relative overflow-hidden ">
        {/* bg-gradient-to-b from-secondary/50 to-background */}
      <div className="wave-pattern absolute inset-0 opacity-30"></div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors disabled:opacity-50"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors disabled:opacity-50"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-10">
            {slides.map((slide, index) => (
              <button 
                key={slide}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeContent === slide ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    pauseAutoSlide();
                    setIsAnimating(true);
                    setActiveContent(slide);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                disabled={isAnimating}
              />
            ))}
          </div>

          <div 
            className="transition-all duration-500 ease-in-out transform"
            style={{
              opacity: isAnimating ? 0.5 : 1,
              transform: `translateX(${isAnimating ? '-10px' : '0'})`,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-counseling-purple bg-clip-text text-transparent leading-normal pb-1">
              {currentContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              {currentContent.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8 py-6 text-lg gap-2">
                {currentContent.primaryButton.icon}
                {currentContent.primaryButton.text}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
          
          <div className="mt-16 p-4 bg-card/60 backdrop-blur-sm rounded-xl shadow-lg border border-border">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={10000} duration={2} separator="," />+
                </h3>
                <p className="text-muted-foreground">Khách hàng hài lòng</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={50} duration={4} />+
                </h3>
                <p className="text-muted-foreground">Chuyên gia tâm lý</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={95} duration={3} suffix="%" />
                </h3>
                <p className="text-muted-foreground">Tỷ lệ hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;