import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FeaturedTreatments } from '../components/FeaturedTreatments';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <FeaturedTreatments />
      
      {/* 
        The About component already contains the 4 requested blocks in order:
        1. 品牌理念 (Philosophy)
        2. 診所環境 (Environment)
        3. 儀器設備 (Equipment)
        4. 媒體報導／榮譽 (Media & Honors)
      */}
      <About />
    </div>
  );
}
