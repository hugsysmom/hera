import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Section, SectionTitle, Button } from '../components/UI';
import { ChevronRight, Info, CheckCircle2, AlertCircle, Clock, Calendar, Sparkles, Scissors, Zap } from 'lucide-react';

interface TreatmentData {
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  principles: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }[];
  process: string[];
  notice: {
    before: string[];
    after: string[];
  };
  faq: { q: string; a: string }[];
}

const TREATMENT_DETAILS: Record<string, TreatmentData> = {
  'double-eyelid': {
    title: '雙眼皮手術',
    subtitle: '打造自然深邃的靈魂之窗',
    intro: '雙眼皮手術不只是多出一道摺痕，更是重塑眼神比例的精細工藝。沈院長根據個人眼型、眼瞼彈性與眉眼距離，量身打造最適合您的自然對稱美感。',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop',
    principles: [
      {
        title: '定點縫合法',
        desc: '適合眼皮薄、脂肪少者。傷口微小、恢復期短，展現如天生般的自然摺痕。',
        icon: <Sparkles className="text-brand-gold" />
      },
      {
        title: '全切開法',
        desc: '適合泡泡眼、眼皮鬆弛者。可同時校正眼瞼下垂並去除多餘脂肪，摺痕穩固。',
        icon: <Scissors className="text-brand-gold" />
      },
      {
        title: '微創小切口',
        desc: '結合切開與縫合優點，能去除部分脂肪並確保摺痕持久。',
        icon: <CheckCircle2 className="text-brand-gold" />
      }
    ],
    process: [
      '專業醫師諮詢與眼型設計',
      '手術前測量與定位標記',
      '局部麻醉與精準施作',
      '術後冰敷與衛教指導',
      '定期回診追蹤恢復狀況'
    ],
    notice: {
      before: [
        '術前一周停止服用阿斯匹靈、維他命E等影響凝血藥物',
        '當天請勿化妝、佩戴隱形眼鏡或飾品',
        '若有過敏病史請務必誠實告知醫師'
      ],
      after: [
        '術後48小時內加強冰敷，48小時後改為熱敷',
        '一周內傷口保持乾燥，清潔以生理食鹽水輕壓',
        '睡前避免過度飲水，睡覺時可墊高枕頭減輕腫脹'
      ]
    },
    faq: [
      { q: '手術後多久可以化妝？', a: '通常建議在拆線後 3-5 天（約術後 10 天）再開始輕薄化妝。' },
      { q: '縫的會不會很容易掉？', a: '現代縫合法已相當成熟，若經專業醫師評估眼型適合，維持度通常非常好。' }
    ]
  },
  'picosecond': {
    title: '皮秒雷射',
    subtitle: '精準擊碎黑色素，重現無暇淨透肌',
    intro: '皮秒雷射利用極短脈衝產生光動力效應，取代傳統熱效應。更精準擊碎斑點，降低熱傷害，恢復期更短，效果更顯著。',
    image: 'https://images.unsplash.com/photo-1629909613654-28a3a7c4bc45?q=80&w=1200&auto=format&fit=crop',
    principles: [
      {
        title: '超短脈衝',
        desc: '千億分之一秒的脈衝速度，將色素粉碎為微塵狀，利於人體代謝。',
        icon: <Zap className="text-brand-gold" />
      },
      {
        title: '蜂巢透鏡',
        desc: '藉由LIOB光誘導光學擊穿效應，刺激深層膠原蛋白新生。',
        icon: <Sparkles className="text-brand-gold" />
      }
    ],
    process: [
      '清潔卸妝與肌膚檢測',
      '敷局部麻藥緩解不適',
      '專業醫師操作雷射療程',
      '術後舒緩導入與冰敷',
      '居家照護衛教'
    ],
    notice: {
      before: [
        '兩周內避免曝曬陽光',
        '一周前停止使用A酸、去角質等刺激性產品'
      ],
      after: [
        '加強防曬與保濕是術後最重要的關鍵',
        '一周內避免泡溫泉、烤箱或劇烈運動'
      ]
    },
    faq: [
      { q: '皮秒雷射會痛嗎？', a: '施作前會敷上局部麻藥，感受多為細微的針刺感，大部分人皆能接受。' },
      { q: '需要做幾次才有效果？', a: '單次即有感，若要處理深層斑點或痘疤，通常建議 3-6 次的完整療程。' }
    ]
  }
};

export default function TreatmentDetail() {
  const { id } = useParams<{ id: string }>();
  const data = id ? TREATMENT_DETAILS[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-serif text-brand-blue">找不到該療程資訊</h2>
        <Link to="/services" className="text-brand-gold mt-4 inline-block hover:underline">返回療程服務</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-blue/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Scientific Beauty
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-widest text-white/90"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-brand-offwhite">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-serif text-brand-blue mb-6">療程簡介</h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-8" />
            <p className="text-brand-blue/70 leading-loose text-lg">
              {data.intro}
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white p-8 flex items-center justify-center border border-brand-grey/10 shadow-sm">
             <Info size={48} className="text-brand-gold/30" />
             <div className="absolute inset-x-0 bottom-0 py-4 text-center text-[10px] uppercase tracking-widest text-brand-grey">Siraya Aesthetic</div>
          </div>
        </div>
      </Section>

      {/* Principles Section */}
      <Section className="bg-white">
        <SectionTitle title="療程原理與關鍵" subtitle="Core Principles" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.principles.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-brand-offwhite hover:border-brand-gold/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-offwhite flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                {p.icon}
              </div>
              <h3 className="text-xl font-serif text-brand-blue mb-4">{p.title}</h3>
              <p className="text-sm text-brand-grey leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-brand-blue text-white">
        <SectionTitle title="標準化療程步驟" subtitle="Treatment Workflow" align="center" />
        <div className="max-w-3xl mx-auto">
          {data.process.map((step, i) => (
            <div key={i} className="flex items-center gap-8 mb-8 last:mb-0 group">
              <span className="text-3xl font-serif text-brand-gold/40 group-hover:text-brand-gold transition-colors italic">0{i+1}</span>
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-lg font-light tracking-wide">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pre/Post Notice */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Clock className="text-brand-gold" />
              <h3 className="text-2xl font-serif text-brand-blue">術前須知</h3>
            </div>
            <ul className="space-y-4">
              {data.notice.before.map((n, i) => (
                <li key={i} className="flex gap-4 text-sm text-brand-grey">
                  <span className="text-brand-gold">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="text-brand-gold" />
              <h3 className="text-2xl font-serif text-brand-blue">術後護理</h3>
            </div>
            <ul className="space-y-4">
              {data.notice.after.map((n, i) => (
                <li key={i} className="flex gap-4 text-sm text-brand-grey">
                  <span className="text-brand-gold font-bold">✓</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-brand-offwhite">
        <SectionTitle title="常見問題" subtitle="FAQ" align="center" />
        <div className="max-w-3xl mx-auto space-y-6">
          {data.faq.map((item, i) => (
            <div key={i} className="bg-white p-8 border border-brand-grey/5">
              <h4 className="text-lg font-serif text-brand-blue mb-4 flex gap-4">
                <span className="text-brand-gold">Q.</span>
                {item.q}
              </h4>
              <p className="text-sm text-brand-grey leading-loose pl-8 border-l border-brand-gold/20">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-serif text-brand-blue mb-8">預約您的蛻變時刻</h2>
        <p className="text-brand-grey mb-12 max-w-lg mx-auto">
          美麗需要精準的計畫。立即預約醫師諮詢，讓我們為您提供最專業的醫學建議與方案設計。
        </p>
        <div className="flex justify-center gap-6">
          <Button variant="gold" className="px-12" onClick={() => window.location.href='/contact'}>立即諮詢</Button>
          <Link to="/services" className="px-12 py-3 border border-brand-offwhite text-sm tracking-widest hover:bg-brand-offwhite transition-all flex items-center gap-2">
            查看其他療程 <ChevronRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
