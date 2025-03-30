import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Về Chúng Tôi</h2>
          <p className="text-muted-foreground text-lg">
          LumiMind Haven là nơi bạn có thể chia sẻ và nhận được sự hỗ trợ từ những chuyên gia tâm lý hàng đầu, 
            giúp bạn vượt qua những khó khăn và thách thức trong cuộc sống.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-shadow bg-backround-color">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Thấu Hiểu</h3>
            <p className="text-muted-foreground">
              Chúng tôi lắng nghe và thấu hiểu mọi vấn đề của bạn với sự đồng cảm và không phán xét.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Chuyên Nghiệp</h3>
            <p className="text-muted-foreground">
              Đội ngũ chuyên gia tâm lý được đào tạo chuyên sâu và có nhiều năm kinh nghiệm trong lĩnh vực tư vấn.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary ">Bảo Mật</h3>
            <p className="text-muted-foreground">
              Mọi thông tin của bạn đều được bảo mật tuyệt đối, đảm bảo không gian riêng tư cho những chia sẻ cá nhân.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;