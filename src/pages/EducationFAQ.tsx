import React, { useState } from 'react';
import { Section, SectionTitle } from '../components/UI';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '療程前需要空腹嗎？',
    a: '非手術類的微整形或雷射療程通常不需要空腹。如果是需要舒眠麻醉的整形手術，則需遵照醫囑，通常術前需禁食禁水 8 小時。'
  },
  {
    q: '醫美療程會有副作用嗎？',
    a: '任何醫療行為都有其風險。希拉雅醫美由專科醫師親自操作，我們會於術前詳細評估您的體質，並將風險降至最低。常見的紅腫通常在數天內會自然消退。'
  },
  {
    q: '術後可以化妝嗎？',
    a: '雷射類療程若無傷口通常隔日可化妝；微整形注射則視針孔狀況而定。建議術後 3 天內儘量保持素顏或輕薄淡妝，並加強保濕。'
  },
  {
    q: '不同品牌的玻尿酸有什麼差別？',
    a: '不同品牌在粒子大小、支撐度與代謝速度上有所差異。醫師會根據您想微調的部位（如：淚溝需細分子、鼻樑需高支撐）建議最適合的產品。'
  }
];

export default function EducationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24">
      <Section className="bg-white">
        <SectionTitle title="常見問題FAQ" subtitle="Frequently Asked Questions" align="center" />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-brand-offwhite hover:border-brand-grey/30 transition-all">
              <button 
                className="w-full p-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg text-brand-blue">{faq.q}</span>
                {openIndex === index ? <Minus size={18} className="text-brand-gold" /> : <Plus size={18} className="text-brand-gold" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-brand-grey leading-loose animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
