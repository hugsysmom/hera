import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      <Section className="bg-white">
        <SectionTitle title="預約諮詢" subtitle="Contact & Reservation" align="center" />
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-brand-blue mb-6">歡迎與我們聯繫</h3>
              <p className="text-brand-blue/70 mb-8 leading-relaxed">
                如果您對任何療程感興趣，或有任何醫美相關疑問，歡迎透過以下方式聯繫我們。我們的專業諮詢團隊將竭誠為您服務，為您安排預約諮詢。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <MapPin className="text-brand-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-blue text-sm mb-1">診所地址</h4>
                  <p className="text-xs text-brand-grey">高雄市新興區中正三路XXX號</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-brand-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-blue text-sm mb-1">預約專線</h4>
                  <p className="text-xs text-brand-grey">07-123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-brand-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-blue text-sm mb-1">電子信箱</h4>
                  <p className="text-xs text-brand-grey">service@siraya-aesthetic.tw</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-brand-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-blue text-sm mb-1">營業時間</h4>
                  <p className="text-xs text-brand-grey">週一至週六 11:00-20:00<br/>週日及國假休診</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-brand-offwhite p-10 border border-brand-grey/10 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">姓名 Name</label>
                  <input type="text" className="w-full bg-white border border-brand-grey/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">電話 Phone</label>
                  <input type="tel" className="w-full bg-white border border-brand-grey/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" placeholder="您的聯絡電話" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">感興趣的項目 Treatment</label>
                <select className="w-full bg-white border border-brand-grey/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold">
                  <option>請選擇療程項目</option>
                  <option>整形外科手術</option>
                  <option>雷射光療</option>
                  <option>微整形注射</option>
                  <option>其他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-blue uppercase tracking-widest">需求說明 Message</label>
                <textarea className="w-full bg-white border border-brand-grey/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold h-32" placeholder="請描述您的諮詢需求"></textarea>
              </div>
              <Button variant="gold" className="w-full py-4 mt-4">送出諮詢申請</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
