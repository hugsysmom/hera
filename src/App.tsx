/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import { About } from './components/About';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Education } from './components/Education';
import NewsPage from './pages/NewsPage';
import EducationGuide from './pages/EducationGuide';
import EducationFAQ from './pages/EducationFAQ';
import EducationInsights from './pages/EducationInsights';

// Page Wrappers for layout consistency
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-24">{children}</div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/education/guide" element={<EducationGuide />} />
            <Route path="/education/faq" element={<EducationFAQ />} />
            <Route path="/education/insights" element={<EducationInsights />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


