import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Bạn đang gặp khó khăn? Đừng ngần ngại liên hệ với chúng tôi. 
              Các chuyên gia của TâmSự luôn sẵn sàng lắng nghe và hỗ trợ bạn.
            </p>
            
            <div className="bg-muted p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Thời Gian Làm Việc</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Thứ 2 - Thứ 6:</span>
                  <span className="font-medium">8:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Thứ 7:</span>
                  <span className="font-medium">8:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Chủ nhật:</span>
                  <span className="font-medium">8:00 - 19:00</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/30">
              <h3 className="text-xl font-semibold mb-4 text-primary">Hỗ Trợ Khẩn Cấp</h3>
              <p className="text-muted-foreground mb-4">
                Nếu bạn đang gặp vấn đề khẩn cấp cần hỗ trợ ngay lập tức, vui lòng gọi:
              </p>
              <div className="text-2xl font-bold text-primary">(84) 123 456 789</div>
              <p className="text-sm text-muted-foreground mt-2">
                Đường dây hỗ trợ 24/7 cho các trường hợp khẩn cấp
              </p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Gửi Tin Nhắn</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input id="name" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" placeholder="Nhập số điện thoại của bạn" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Dịch vụ bạn quan tâm</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Tư vấn tâm lý chung</SelectItem>
                    <SelectItem value="relationship">Tư vấn tình cảm</SelectItem>
                    <SelectItem value="family">Tư vấn gia đình</SelectItem>
                    <SelectItem value="depression">Trầm cảm & lo âu</SelectItem>
                    <SelectItem value="addiction">Nghiện & phục hồi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Tin nhắn</Label>
                <Textarea 
                  id="message" 
                  placeholder="Mô tả vấn đề bạn đang gặp phải..." 
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full">Gửi tin nhắn</Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Bằng cách gửi biểu mẫu này, bạn đồng ý với 
                <a href="#" className="text-primary hover:underline"> Chính sách bảo mật </a> 
                của chúng tôi.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;