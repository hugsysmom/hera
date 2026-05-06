import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "px-6 py-2.5 transition-all duration-300 flex items-center justify-center gap-2 group tracking-widest text-sm";
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-opacity-90",
    secondary: "bg-brand-green text-white hover:bg-opacity-90",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    gold: "bg-brand-gold text-white hover:bg-opacity-90 shadow-lg shadow-brand-gold/20"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
    </motion.button>
  );
}

export function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-brand-gold font-serif italic mb-2 tracking-widest uppercase text-sm"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-serif text-brand-blue"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={`h-px bg-brand-gold mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
