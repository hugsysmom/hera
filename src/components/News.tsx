import React from 'react';
import { motion } from 'motion/react';
import { Section, SectionTitle } from './UI';

const newsItems = [
  {
    date: '2026.05.01',
    category: '活動訊息',
    title: '【春之頌】希拉雅限定療程優惠，重煥肌膚光采',
    desc: '迎接初夏，我們為您準備了專屬的肌膚喚醒計畫...'
  },
  {
    date: '2026.04.15',
    category: '專業報導',
    title: '沈院長受邀出席亞洲鼻整形年會發表專題演講',
    desc: '與國際頂尖醫師交流最新手術技術，致力提供顧客最完美的成果...'
  },
  {
    date: '2026.03.20',
    category: '診所公告',
    title: '引進全方位尖端儀器，提升醫療品質與安全性',
    desc: '全面升級原廠認證設備，打造更舒適專業的諮詢空間...'
  }
];

export function News() {
  return (
    <Section id="news" className="bg-brand-offwhite">
      <SectionTitle title="最新消息" subtitle="Latest News" align="left" />
      
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border-l-4 border-brand-grey/20 hover:border-brand-gold transition-all cursor-pointer shadow-sm"
          >
            <div className="flex flex-col items-center justify-center min-w-[120px] text-center border-r border-brand-offwhite pr-8 hidden md:flex">
              <span className="text-sm font-bold text-brand-gold">{item.date.split('.')[0]}</span>
              <span className="text-2xl font-serif text-brand-blue">{item.date.split('.')[1]}.{item.date.split('.')[2]}</span>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-brand-blue/5 text-brand-blue text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-[10px] text-brand-grey md:hidden">{item.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-blue group-hover:text-brand-gold transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-brand-grey line-clamp-1">{item.desc}</p>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
              <div className="w-4 h-px bg-current" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#" className="text-xs font-bold text-brand-blue uppercase tracking-widest border-b border-brand-blue/20 pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
          查看所有消息
        </a>
      </div>
    </Section>
  );
}
