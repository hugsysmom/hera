import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAV_ITEMS, TREATMENTS } from '../constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-brand-blue">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-serif text-xl border border-brand-gold">
            S
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-serif tracking-tighter leading-none">
              希拉雅 <span className="text-brand-gold">醫美診所</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-brand-grey">
              Siraya Medical Aesthetic
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => {
                if (item.mega) setActiveMegaMenu(true);
              }}
              onMouseLeave={() => {
                if (item.mega) setActiveMegaMenu(false);
              }}
            >
              <Link 
                to={item.path}
                className={`text-sm tracking-widest transition-colors font-medium relative py-2 flex items-center gap-1 ${
                  item.accent ? 'bg-brand-gold text-white px-6 py-2 rounded-sm' : 'hover:text-brand-gold'
                }`}
              >
                {item.label}
                {(item.mega || item.children) && <ChevronDown size={14} className="opacity-50" />}
                {!item.accent && (
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
                )}
              </Link>

              {/* Standard Sub-menu Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48">
                  <div className="bg-white shadow-xl border-t-2 border-brand-gold py-4">
                    {item.children.map((child) => (
                      <Link 
                        key={child.path} 
                        to={child.path}
                        className="block px-6 py-2 text-sm text-brand-blue hover:text-brand-gold hover:bg-brand-offwhite transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Mega Menu Overlay */}
              {item.mega && (
                <AnimatePresence>
                  {activeMegaMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 pt-4 w-[800px]"
                    >
                      <div className="bg-white shadow-2xl p-10 border-t-2 border-brand-gold grid grid-cols-4 gap-8">
                        {TREATMENTS.map((group) => (
                          <div key={group.category}>
                            <h3 className="text-brand-gold text-xs font-serif italic mb-4 border-b border-brand-offwhite pb-2">
                              {group.category}
                            </h3>
                            {group.subcategories ? (
                              group.subcategories.map(sub => (
                                <div key={sub.name} className="mb-4">
                                  <h4 className="text-brand-blue/60 text-[10px] font-bold mb-2 uppercase tracking-widest">{sub.name}</h4>
                                  <ul className="space-y-2">
                                    {sub.items.map(item => (
                                      <li key={item.id}>
                                        <Link to={`/services/${item.id}`} className="text-sm text-brand-blue/80 hover:text-brand-gold transition-colors block">
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            ) : (
                              <ul className="space-y-2">
                                {group.items?.map(item => (
                                  <li key={item.id}>
                                    <Link to={`/services/${item.id}`} className="text-sm text-brand-blue/80 hover:text-brand-gold transition-colors block">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-2 text-brand-gold border-l border-brand-grey/20 pl-10">
            <Phone size={18} />
            <span className="text-sm font-medium">07-123-4567</span>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-blue text-white z-40 lg:hidden flex flex-col p-10 pt-32"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.id}
                to={item.path}
                className="text-2xl font-serif mb-8 border-b border-white/10 pb-4 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronDown size={20} className="-rotate-90 opacity-50" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

