import { Link } from 'react-router-dom';
import { Section, Button } from './UI';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-brand-blue text-white">
      {/* Top CTA */}
      <div className="bg-brand-gold py-12 px-6 border-t-4 border-brand-green">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif mb-2">準備好遇見更好的自己嗎？</h3>
            <p className="text-white/80 tracking-widest text-sm uppercase">Start Your Journey Towards Beauty Today</p>
          </div>
          <Link to="/contact">
            <Button variant="primary" className="bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-12">
              預約專屬諮詢
            </Button>
          </Link>
        </div>
      </div>

      <Section className="py-20 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue font-serif text-xl border border-brand-gold">
                S
              </div>
              <h2 className="text-2xl font-serif tracking-tighter">希拉雅 <span className="text-brand-gold">醫美</span></h2>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              希拉雅醫美診所位於高雄，由整形外科專科醫師團隊領軍，提供最專業、細膩的醫美體驗。我們深信美麗應與健康並行，致力於為每一位求診者量身規劃專屬美學方案。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 flex flex-col items-start md:items-center">
            <div className="w-full max-w-[200px]">
              <h4 className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-8">網站導覽</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-brand-gold transition-colors">關於希拉雅</Link></li>
                <li><Link to="/services" className="hover:text-brand-gold transition-colors">療程服務項目</Link></li>
                <li><Link to="/team" className="hover:text-brand-gold transition-colors">醫師團隊介紹</Link></li>
                <li><Link to="/news" className="hover:text-brand-gold transition-colors">最新消息與活動</Link></li>
                <li><Link to="/contact" className="hover:text-brand-gold transition-colors">線上諮詢預約</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-8">聯繫我們</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-brand-gold shrink-0" size={20} />
                  <div>
                    <h5 className="text-sm font-bold mb-1">診所地址</h5>
                    <p className="text-sm text-white/60">高雄市新興區中正三路XXX號</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brand-gold shrink-0" size={20} />
                  <div>
                    <h5 className="text-sm font-bold mb-1">預約電話</h5>
                    <p className="text-sm text-white/60">07-123-4567</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="text-brand-gold shrink-0" size={20} />
                  <div>
                    <h5 className="text-sm font-bold mb-1">電子信件</h5>
                    <p className="text-sm text-white/60">service@siraya-aesthetic.tw</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-bold mb-1">營業時間</h5>
                  <p className="text-sm text-white/60">週一至週六 11:00 - 20:00</p>
                  <p className="text-xs text-white/40 mt-1">週日及國定假日休診</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="py-8 px-6 text-center text-[10px] text-white/30 uppercase tracking-widest">
        &copy; 2026 Siraya Medical Aesthetic Clinic. All Rights Reserved. ｜ <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      </div>
    </footer>
  );
}
