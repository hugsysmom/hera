import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { motion } from 'motion/react';

const guideSteps = [
  {
    step: '01',
    title: '釐清自身需求',
    desc: '在開始任何療程前，先問問自己想改善的部分。是膚質困擾、輪廓調整，還是歲月留下的痕跡？'
  },
  {
    step: '02',
    title: '預約專業諮詢',
    desc: '醫美是非常個人化的醫療行為。預約醫師一對一諮詢，讓專科醫師依據您的狀態給予精準建議。'
  },
  {
    step: '03',
    title: '術前評估與過敏檢測',
    desc: '確保身體狀況適合進行療程，並誠實告知醫師過往病史與藥物史。'
  },
  {
    step: '04',
    title: '術後護理與回診',
    desc: '三分靠療程，七分靠護理。完整的修復期照護是效果持久的關鍵。'
  }
];

export default function EducationGuide() {
  return (
    <div className="pt-24">
      <Section className="bg-brand-offwhite">
        <SectionTitle title="醫美新手指南" subtitle="First-timer's Guide" align="center" />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 border border-brand-grey/10 shadow-sm mb-16">
            <h3 className="text-2xl font-serif text-brand-blue mb-6">給第一次接觸醫美的你</h3>
            <p className="text-brand-blue/70 leading-loose mb-8">
              追求美麗是一個循序漸進的過程。希拉雅醫美診所致力於提供透明、安全的醫療資訊，我們希望每一位求診者在開始前，都能有充足的認知與準備。
            </p>
            <div className="w-20 h-px bg-brand-gold mb-12" />
            
            <div className="space-y-12">
              {guideSteps.map((item) => (
                <div key={item.step} className="flex gap-8">
                  <span className="text-4xl font-serif text-brand-gold/30">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-serif text-brand-blue mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-grey leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
