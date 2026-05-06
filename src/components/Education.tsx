import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Section, SectionTitle } from './UI';
import { BookOpen, HelpCircle, UserCheck } from 'lucide-react';

const guideItems = [
  {
    title: '醫美新手指南',
    desc: '針對第一次接觸醫美的朋友，提供最基礎的術前評估與心態準備。',
    icon: BookOpen,
    path: '/education/guide'
  },
  {
    title: '常見問題FAQ',
    desc: '整理診間最常被問到的問題，解除您對療程的種種疑慮。',
    icon: HelpCircle,
    path: '/education/faq'
  },
  {
    title: '醫師觀點',
    desc: '沈院長與醫師團隊分享專業醫學美學知識與案例解析。',
    icon: UserCheck,
    path: '/education/insights'
  }
];

export function Education() {
  return (
    <Section id="education" className="bg-white">
      <SectionTitle 
        title="醫美知多少" 
        subtitle="Education & Guide"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guideItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-brand-offwhite hover:border-brand-gold transition-all duration-500 group"
            >
              <div className="mb-6 text-brand-grey group-hover:text-brand-gold transition-colors">
                <Icon size={40} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif text-brand-blue mb-4">{item.title}</h3>
              <p className="text-sm text-brand-blue/60 leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link to={item.path} className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <div className="w-4 h-px bg-brand-gold" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
