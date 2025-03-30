import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Counselors = () => {
  const counselors = [
    {
      name: "TS. Nguyễn Văn A",
      title: "Chuyên gia tâm lý lâm sàng",
      image: "/Face1.jpeg",
      specialties: ["Tâm lý học lâm sàng", "Trầm cảm", "Lo âu"],
      description: "Với hơn 15 năm kinh nghiệm, TS. Nguyễn Văn A đã giúp đỡ hàng nghìn người vượt qua những khó khăn về tâm lý."
    },
    {
      name: "ThS. Trần Thị B",
      title: "Chuyên gia tư vấn hôn nhân",
      image: "/Face 2.jpeg",
      specialties: ["Tư vấn hôn nhân", "Quan hệ gia đình", "Nuôi dạy con"],
      description: "ThS. Trần Thị B chuyên sâu về giải quyết các vấn đề trong hôn nhân và gia đình, với phương pháp tiếp cận tích cực."
    },
    {
      name: "PGS.TS. Lê Văn C",
      title: "Chuyên gia tâm lý trị liệu",
      image: "/Face 3.jpeg",
      specialties: ["Rối loạn căng thẳng", "Chấn thương tâm lý", "Nghiện"],
      description: "PGS.TS. Lê Văn C có hơn 20 năm kinh nghiệm trong việc điều trị các rối loạn tâm lý phức tạp, đặc biệt là các vấn đề liên quan đến chấn thương."
    }
  ];

  return (
    <section id="counselors" className="py-20 bg-background rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Đội Ngũ Chuyên Gia</h2>
          <p className="text-muted-foreground text-lg">
            Gặp gỡ đội ngũ chuyên gia tâm lý hàng đầu của chúng tôi, những người sẽ đồng hành cùng bạn 
            trên hành trình phát triển bản thân.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counselors.map((counselor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={counselor.image} 
                  alt={counselor.name} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-1">{counselor.name}</h3>
                <p className="text-primary font-medium mb-3">{counselor.title}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {counselor.specialties.map((specialty, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {counselor.description}
                </p>
                
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-primary text-white">
                  <MessageCircle className="h-4 w-4" />
                  Đặt lịch tư vấn
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="link" className="text-primary font-medium">
            Xem tất cả chuyên gia →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Counselors;
