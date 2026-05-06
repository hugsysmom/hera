import React from 'react';
import { motion } from 'motion/react';
import { Section, SectionTitle } from './UI';
import { ShieldCheck, Award, Microscope, Image } from 'lucide-react';

export function About() {
  return (
    <div id="about">
      {/* 1. 品牌理念 - Philosophy */}
      <Section className="bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square bg-brand-offwhite relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519494140261-0f730249c23b?q=80&w=1000&auto=format&fit=crop" 
                alt="Brand Philosophy"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-brand-blue/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 -z-10 lg:block hidden" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-gold font-serif italic mb-4 block tracking-widest">Brand Philosophy</span>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-blue mb-8 leading-tight">
              細膩如絲，專業如磐 <br />
              <span className="text-brand-grey font-light">定義你的原生美學</span>
            </h3>
            <p className="text-brand-blue/70 leading-relaxed mb-6">
              「希拉雅」取自土地的恩賜，意涵著生命力與重生的力量。我們深信醫美不應是刻板的複製，而是挖掘每個人潛藏的獨特性。
            </p>
            <p className="text-brand-blue/70 leading-relaxed mb-10">
              由整形外科專科醫師團隊創立，我們將醫學的严謹與藝術的細膩結合。在希拉雅，每一次諮詢都是一場深度的對話，每一次療程都是對美麗的精雕細琢。
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-gold" /> 醫療安全
                </h4>
                <p className="text-xs text-brand-grey leading-loose">專科醫師親自操作，最高標準手術室規格。</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                  <Award size={18} className="text-brand-gold" /> 專屬美感
                </h4>
                <p className="text-xs text-brand-grey leading-loose">拒絕制式臉孔，為您量身打造黃金比例。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. 診所環境 - Clinic Environment */}
      <Section className="bg-brand-offwhite">
        <SectionTitle title="舒適放鬆的醫學空間" subtitle="The Sanctuary" align="center" />
        <div className="grid grid-cols-12 gap-4 h-[600px]">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-8 bg-brand-grey/10 overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Environment 1" />
            <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs tracking-widest uppercase mb-1">Reception Area</p>
              <h4 className="text-xl font-serif">隱私接待大廳</h4>
            </div>
          </motion.div>
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-brand-grey/10 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Environment 2" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-brand-grey/10 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Environment 3" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 3. 儀器設備 - Equipment */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="p-12 border border-brand-offwhite relative">
              <div className="absolute -top-6 -right-6 text-brand-gold">
                <Microscope size={64} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif text-brand-blue mb-6">全方位尖端儀器配置</h3>
              <p className="text-brand-blue/70 mb-8 leading-relaxed">
                希拉雅引進原廠認證頂級設備，從皮秒雷射到音波提拉，皆由原廠專業訓練並取得執照，確保療程能量精準、效果卓越。
              </p>
              <ul className="space-y-4">
                {['最新一代皮秒雷射', '黃金精準音波拉提', '內視鏡隆乳手術系統', '3D電腦模擬諮詢設備'].map(item => (
                  <li key={item} className="flex items-center gap-4 text-brand-blue font-medium tracking-wide">
                    <div className="w-2 h-2 bg-brand-green rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop" alt="Equipment" className="w-full h-auto shadow-2xl" />
          </motion.div>
        </div>
      </Section>

      {/* 4. 媒體報導／榮譽 - Media & Honors */}
      <Section className="bg-brand-blue text-white py-32">
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Trust & Recognition</span>
          <h2 className="text-4xl font-serif">媒體肯定與專業榮譽</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-80">
          {[
            { label: '整形外科年會', value: '受邀發表演說' },
            { label: '專業醫療雜誌', value: '專題採訪報導' },
            { label: '國際隆鼻研討會', value: '示範教學單位' },
            { label: '原廠認證', value: '卓越示範診所' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <Award size={32} strokeWidth={1} />
              </div>
              <h4 className="font-serif text-lg mb-1">{item.label}</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
