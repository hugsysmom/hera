import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionTitle } from '../components/UI';

const CATEGORIES = ['全部消息', '最新活動', '優惠方案', '新品療程', '診所公告'];

const NEWS_DATA = [
  {
    date: '2026.05.01',
    category: '最新活動',
    title: '【春之頌】希拉雅限定茶會，分享原生美學理念',
    desc: '誠摯邀請您參與我們的春季美學分享會，現場將由沈院長親自解析結構式美感...'
  },
  {
    date: '2026.04.15',
    category: '優惠方案',
    title: '初夏煥膚祭：皮秒雷射組合限定早鳥預約中',
    desc: '迎接陽光燦爛的季節，為您的肌膚做好防禦與煥新準備，限時組合包含術後導入...'
  },
  {
    date: '2026.04.10',
    category: '新品療程',
    title: '引進國際最新「極線音波」系統，精準拉提更有感',
    desc: '希拉雅正式引進美國FDA認證之最新提拉設備，提供更細膩的深度焦距調整...'
  },
  {
    date: '2026.03.20',
    category: '診所公告',
    title: '【重要公告】希拉雅醫美診所營業時間調整通知',
    desc: '為了提供更好的服務品質，自五月份起週六門診將延長至晚間九時...'
  },
  {
    date: '2026.03.05',
    category: '最新活動',
    title: '公益愛心月：希拉雅與您一起守護弱勢婦女健康',
    desc: '本月指定療程所得之 5% 將捐贈予高雄在地婦女福利基金會...'
  }
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('全部消息');

  const filteredNews = activeTab === '全部消息' 
    ? NEWS_DATA 
    : NEWS_DATA.filter(item => item.category === activeTab);

  return (
    <div className="pt-24 min-h-screen">
      <Section className="bg-white">
        <SectionTitle title="最新消息" subtitle="Latest News & Updates" align="center" />
        
        {/* News Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-brand-offwhite pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-4 py-2 text-sm tracking-widest transition-all duration-300 font-medium ${
                activeTab === cat ? 'text-brand-gold' : 'text-brand-blue/40 hover:text-brand-blue'
              }`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredNews.length > 0 ? (
                filteredNews.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row gap-8 pb-8 border-b border-brand-offwhite group cursor-pointer"
                  >
                    <div className="md:w-32 shrink-0">
                      <span className="text-sm font-bold text-brand-gold block mb-1">
                        {item.date.split('.')[0]}
                      </span>
                      <span className="text-2xl font-serif text-brand-blue">
                        {item.date.split('.')[1]}.{item.date.split('.')[2]}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green bg-brand-green/5 px-2 py-1 mb-3 inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-serif text-brand-blue group-hover:text-brand-gold transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-grey leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="w-12 h-12 flex items-center justify-center text-brand-gold group-hover:translate-x-2 transition-transform">
                      <div className="w-8 h-px bg-current" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 text-brand-grey italic">
                  暫無此分類的消息內容
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
}
