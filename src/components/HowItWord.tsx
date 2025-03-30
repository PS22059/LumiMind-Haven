import React from 'react';
import { Calendar, MessageCircle, Search, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Tìm kiếm chuyên gia",
      description: "Dựa trên vấn đề của bạn, chúng tôi sẽ gợi ý những chuyên gia phù hợp nhất."
    },
    {
      icon: Calendar,
      title: "Đặt lịch tư vấn",
      description: "Chọn thời gian phù hợp với lịch trình của bạn, có thể là trực tuyến hoặc trực tiếp."
    },
    {
      icon: MessageCircle,
      title: "Tham gia buổi tư vấn",
      description: "Chia sẻ tâm sự và nhận lời khuyên từ chuyên gia trong không gian riêng tư, an toàn."
    },
    {
      icon: UserCheck,
      title: "Nhận hỗ trợ liên tục",
      description: "Theo dõi tiến trình và nhận sự hỗ trợ liên tục từ chuyên gia của chúng tôi."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Cách Thức Hoạt Động</h2>
          <p className="text-muted-foreground text-lg">
            Quy trình đơn giản, thuận tiện giúp bạn dễ dàng tiếp cận với dịch vụ tư vấn tâm lý chuyên nghiệp.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-24 left-[calc(12.5%)] right-[calc(12.5%)] h-1 bg-primary/20 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-md">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border w-full">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;