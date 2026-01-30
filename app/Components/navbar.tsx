import { navLinks } from '~/lib/constants';
import Container from './container';
import Logo from './logo';
import { Link } from 'react-router';
import { GitHub } from './icons/github';
import { LinkedIn } from './icons/linkedin';
import { XformerlyTwitter } from './icons/twitter';
import { useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const newScrolled = window.scrollY > scrollThreshold;
      
      if (newScrolled !== scrolled) {
        setIsAnimating(true);
        setScrolled(newScrolled);
        
        // Reset animation flag after transition completes
        setTimeout(() => setIsAnimating(false), 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'fixed top-0 transform translate-y-0' 
          : 'relative transform translate-y-0'
      } ${
        isAnimating ? 'animate-pulse' : ''
      }`}
    >
      <Container
        className={`bg-white rounded-2xl py-4 px-4 my-4 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'shadow-lg scale-95 opacity-95' 
            : 'shadow-0 scale-100 opacity-100'
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between">
          <ul className="flex items-center gap-10 lg:gap-6 pl-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`rounded-full py-2 px-3 transition-all duration-200 ease-in-out ${
                      isActive 
                        ? 'text-orange-500 font-semibold scale-105' 
                        : 'text-slate-400 hover:text-slate-800 hover:scale-105'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <section className="flex items-center gap-8 pr-4">
            <GitHub className="w-5 h-5 transition-all duration-200 hover:scale-110 hover:text-orange-500" />
            <LinkedIn className="w-5 h-5 transition-all duration-200 hover:scale-110 hover:text-orange-500" />
            <XformerlyTwitter className="w-5 h-5 transition-all duration-200 hover:scale-110 hover:text-orange-500" />
          </section>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between">
            <figure>
              <Logo />
            </figure>

            <button
              type="button"
              className="h-12 w-12 cursor-pointer grid place-items-center border rounded-full border-orange-500 text-orange-500 transition-all duration-200 hover:scale-110 hover:bg-orange-500 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X className="w-6 h-6 transition-all duration-200" />
              ) : (
                <Menu className="w-6 h-6 transition-all duration-200" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Fixed Animation */}
          <div 
            className="grid transition-all duration-300 ease-in-out"
            style={{
              gridTemplateRows: open ? '1fr' : '0fr',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="overflow-hidden">
              <div className="pt-6 space-y-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setOpen(false)}
                          className={`block px-2 py-2 text-lg transition-all duration-200 ease-in-out ${
                            isActive 
                              ? 'text-orange-500 font-semibold' 
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <section className="flex items-center gap-6 pt-6 border-t border-slate-200">
                  <GitHub className="w-5 h-5 text-slate-600 transition-all duration-200 hover:scale-110 hover:text-orange-500" />
                  <LinkedIn className="w-5 h-5 text-slate-600 transition-all duration-200 hover:scale-110 hover:text-orange-500" />
                  <XformerlyTwitter className="w-5 h-5 text-slate-600 transition-all duration-200 hover:scale-110 hover:text-orange-500" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;