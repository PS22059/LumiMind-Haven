import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Thị H.",
      avatar: "/Face 4.jpeg",
      rating: 5,
      text: "Tôi đã trải qua giai đoạn rất khó khăn sau khi ly hôn. Nhờ có sự tư vấn từ ThS. Trần Thị B, tôi đã dần lấy lại cân bằng và tìm thấy niềm vui trong cuộc sống."
    },
    {
      name: "Trần Văn M.",
      avatar: "/Face 5.jpeg",
      rating: 5,
      text: "Áp lực công việc khiến tôi luôn trong trạng thái căng thẳng và mất ngủ. Sau 2 tháng làm việc với TS. Nguyễn Văn A, tôi đã cải thiện được tình trạng của mình rất nhiều."
    },
    {
      name: "Lê Thị N.",
      avatar: "/Face 6.jpeg",
      rating: 4,
      text: "Con trai tôi gặp vấn đề về giao tiếp xã hội ở trường. Sau khi được PGS.TS. Lê Văn C tư vấn, cháu đã có những tiến bộ rõ rệt. Cảm ơn TâmSự rất nhiều."
    }
  ];

  return (
    <section className="py-20 bg-counseling-soft-peach/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <p className="text-muted-foreground text-lg">
            Hàng nghìn người đã thay đổi cuộc sống của họ nhờ sự hỗ trợ từ các chuyên gia của TâmSự.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl shadow-sm border border-border relative"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-xl">{testimonial.name}</h1>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground relative">
                <span className="text-5xl font-serif text-primary/20 absolute -top-4 -left-2">"</span>
                {testimonial.text}
                <span className="text-5xl font-serif text-primary/20 absolute -bottom-8 -right-2">"</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;