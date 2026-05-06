import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { motion } from 'motion/react';

const articles = [
  {
    title: '隆鼻手術不只是加高，結構式隆鼻的藝術',
    author: '沈院長',
    date: '2026.04.10',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: '電波與音波該怎麼選？醫師告訴你關鍵差異',
    author: '林醫師',
    date: '2026.03.25',
    image: 'https://images.unsplash.com/photo-1629909613654-28a3a7c4bc45?q=80&w=600&auto=format&fit=crop'
  }
];

export default function EducationInsights() {
  return (
    <div className="pt-24">
      <Section className="bg-brand-offwhite">
        <SectionTitle title="醫師觀點" subtitle="Physician Insights" align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <motion.div 
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={article.title} 
                />
              </div>
              <span className="text-brand-gold text-[10px] font-bold tracking-widest uppercase block mb-2">
                {article.author} ｜ {article.date}
              </span>
              <h3 className="text-2xl font-serif text-brand-blue group-hover:text-brand-gold transition-colors">
                {article.title}
              </h3>
              <div className="w-10 h-px bg-brand-gold mt-4 group-hover:w-20 transition-all" />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
