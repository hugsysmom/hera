import React from 'react';
import { motion } from 'motion/react';
import { Section } from './UI';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const treatments = [
  {
    name: 'DermaClear',
    subtitle: '黑鑽水飛梭',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    color: 'bg-[#F2D7D9]'
  },
  {
    name: 'Juvelook',
    subtitle: '喬雅露',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    color: 'bg-[#D3E4CD]'
  },
  {
    name: 'Motiva',
    subtitle: '魔滴',
    image: 'https://images.unsplash.com/photo-1590105577767-e21a46b6c1f2?q=80&w=800&auto=format&fit=crop',
    color: 'bg-[#ADC2A9]'
  },
  {
    name: 'Mentor Xtra',
    subtitle: '女王波',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    color: 'bg-[#99A799]'
  }
];

export function FeaturedTreatments() {
  return (
    <Section id="featured-treatments" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-serif text-brand-gold uppercase tracking-[0.2em] mb-4">
          TREATMENT
        </h2>
        <p className="text-xl font-serif text-brand-blue tracking-[0.3em]">
          熱門診療項目
        </p>
      </div>

      <div className="relative group px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group/card cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-6 shadow-lg">
                {/* Simulated content as per reference image design */}
                <div className={`absolute inset-0 ${t.color} opacity-20`} />
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                {/* Overlay with labels like in the image */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <div className="text-white text-[10px] font-bold tracking-widest uppercase">Explore Treatment</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-brand-blue mb-1 group-hover/card:text-brand-gold transition-colors">
                  {t.name}
                </h3>
                <p className="text-sm text-brand-grey tracking-widest">
                  {t.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows (Decorative Like in Image) */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all hidden md:flex">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white shadow-lg shadow-brand-gold/20 hover:scale-110 transition-all hidden md:flex">
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}
