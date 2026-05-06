import { motion } from 'motion/react';
import { Section, SectionTitle } from './UI';
import { TEAM_MEMBERS } from '../constants';

export function Team() {
  return (
    <Section id="team" className="bg-brand-offwhite">
      <SectionTitle 
        title="整形專科醫師團隊" 
        subtitle="Our Expert Physicians"
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 bg-white p-8 border border-brand-grey/10 shadow-sm"
          >
            <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-brand-grey/5">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-brand-gold text-xs font-bold tracking-widest mb-2 uppercase">
                Expert Doctor
              </span>
              <h3 className="text-4xl font-serif text-brand-blue mb-2">
                {member.name} <span className="text-xl italic font-light ml-2">{member.role}</span>
              </h3>
              <div className="w-12 h-px bg-brand-gold mb-6" />
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2" />
                  <p className="text-sm text-brand-blue/80 leading-relaxed">
                    <strong>主治專長：</strong><br />
                    {member.specialty}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2" />
                  <p className="text-sm text-brand-blue/80 leading-relaxed">
                    <strong>資歷：</strong><br />
                    台灣整形外科專科醫師<br />
                    高雄醫學大學醫學系<br />
                    亞洲鼻整形研究中心院士
                  </p>
                </div>
              </div>

              <a href="#" className="mt-8 text-brand-gold text-xs font-bold uppercase tracking-widest border-b border-brand-gold/30 pb-1 w-fit hover:border-brand-gold transition-all">
                醫師門診表
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
