import { motion } from 'motion/react';
import { Section, SectionTitle, Button } from './UI';
import { TREATMENTS } from '../constants';
import { Scissors, Zap, Sparkles, Heart } from 'lucide-react';

const icons = [Scissors, Zap, Sparkles, Heart];

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <SectionTitle 
        title="專業療程服務" 
        subtitle="Medical Aesthetic Services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 overflow-hidden">
        {TREATMENTS.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative aspect-[3/4] group cursor-pointer overflow-hidden border border-brand-offwhite"
            >
              <div className="absolute inset-0 bg-brand-blue transition-colors duration-500 group-hover:bg-brand-gold" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:bg-white group-hover:text-brand-gold transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">{item.category}</h3>
                <div className="w-10 h-px bg-white/40 mb-6 group-hover:w-20 transition-all duration-500" />
                
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden text-sm text-white/80 leading-relaxed">
                  {item.subcategories ? (
                    item.subcategories.map(s => s.name).join('｜')
                  ) : (
                    item.items?.map(i => i.name).join('｜')
                  )}
                </div>
                
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    const firstId = item.subcategories?.[0]?.items?.[0]?.id || item.items?.[0]?.id;
                    if (firstId) window.location.href = `/services/${firstId}`;
                  }}
                  className="mt-8 text-white uppercase tracking-[0.3em] text-[10px] font-bold border border-white/30 px-6 py-2 hover:bg-white hover:text-brand-blue transition-all"
                >
                  View More
                </div>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-8 left-8 text-6xl font-serif text-white/5 pointer-events-none">
                0{index + 1}
              </span>
              
              {/* Background image overlay */}
              <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-10">
                <img 
                  src={`https://images.unsplash.com/photo-1629909613654-28a3a7c4bc45?q=80&w=400&h=600&auto=format&fit=crop&index=${index}`} 
                  alt={item.category}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center">
        <Button variant="outline" className="px-12">更多療程細項</Button>
      </div>

      {/* Treatment Process Section */}
      <div className="mt-32 border-t border-brand-offwhite pt-32">
        <SectionTitle title="療程服務流程" subtitle="Our Professional Process" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: '預約諮詢', desc: '專業顧問協助安排醫師門診時間' },
            { step: '02', title: '醫師面測', desc: '專科醫師針對個人需求進行專業評估' },
            { step: '03', title: '術前準備', desc: '完善的衛教與生理檢查確保手術安全' },
            { step: '04', title: '專業施作', desc: '由專科醫師親自操作尖端醫療儀器' }
          ].map((item, idx) => (
            <div key={item.step} className="text-center group">
              <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center mx-auto mb-6 text-brand-gold font-serif text-xl group-hover:bg-brand-gold group-hover:text-white transition-all">
                {item.step}
              </div>
              <h4 className="text-xl font-serif text-brand-blue mb-2">{item.title}</h4>
              <p className="text-sm text-brand-grey">{item.desc}</p>
              {idx < 3 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-brand-gold/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
