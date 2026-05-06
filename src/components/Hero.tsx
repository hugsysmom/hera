import { motion } from 'motion/react';
import { Button } from './UI';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        {/* Overlays for texture and readability */}
        <div className="absolute inset-0 bg-brand-blue/30 backdrop-brightness-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-blue/40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand-gold uppercase tracking-[0.6em] text-xs font-bold mb-8 block drop-shadow-sm">
            SIRAYA MEDICAL AESTHETIC CLINIC
          </span>
          
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-tight drop-shadow-lg">
            以醫療專業 <br />
            <span className="italic font-light text-brand-offwhite/90">定義您的原生之美</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px bg-brand-gold mx-auto mb-10"
          />

          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            希拉雅整形外科專科團隊，結合尖端科技與純熟工藝，自輪廓修飾到膚質重塑，為每位追求卓越的您，提供量身定制的優雅轉變。
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="gold" className="px-12 py-4 text-base" onClick={() => window.location.href='/contact'}>
              預約專屬諮詢
            </Button>
            <Button variant="outline" className="px-12 py-4 text-base border-white text-white hover:bg-white hover:text-brand-blue group">
              探索療程服務
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Hero Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 text-white/40"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold">Specialist Team Lead</span>
        <div className="w-12 h-px bg-white/20" />
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
