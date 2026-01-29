import { navLinks } from '~/lib/constants';
import Container from './container';
import Logo from './logo';
import { Link } from 'react-router';
import { GitHub } from './icons/github';
import { LinkedIn } from './icons/linkedin';
import { XformerlyTwitter } from './icons/twitter';
import { useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <Container className="bg-white/60 backdrop-blur-sm rounded-full py-6 px-10 my-4 flex items-center justify-between">
        <ul className="hidden sm:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={
                    'rounded-full py-2 hover:text-slate-800 transition-all duration-200 font-semibold ' +
                    (isActive ? 'text-orange-500' : 'text-slate-400')
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <section className="hidden sm:flex items-center gap-8">
          <GitHub className="w-5 h-5" />
          <LinkedIn className="w-5 h-5" />
          <XformerlyTwitter className="w-5 h-5" />
        </section>

        <figure className="sm:hidden">
          <Logo />
        </figure>

        <button
          type="button"
          className="sm:hidden h-12 w-12 cursor-pointer grid place-items-center border rounded-full border-orange-500 text-orange-500"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6 hover:scale-110 transition-all duration-200" />
        </button>
      </Container>

      <div
        className={
          'sm:hidden flex flex-col gap-10 items-start justify-center fixed top-0 left-0 w-full h-full bg-white/40 backdrop-blur-xl transition-all duration-300 ' +
          (open
            ? 'opacity-100 visible pointer-events-auto z-50'
            : 'opacity-0 invisible pointer-events-none z-[-1]')
        }
      >
        <button
          type="button"
          className="absolute top-14 right-5 sm:hidden h-12 w-12 grid place-items-center border rounded-full border-orange-500 text-orange-500"
          onClick={() => setOpen(!open)}
        >
          <X className="w-6 h-6 hover:scale-110 transition-all duration-200" />
        </button>

        <ul className="grid gap-5 p-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={
                    'rounded-full py-2 hover:text-orange-500 transition-all text-6xl duration-200 ' +
                    (isActive ? 'text-orange-500' : 'text-slate-300')
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <section className="px-6 flex items-center gap-8">
          <GitHub className="w-5 h-5" />
          <LinkedIn className="w-5 h-5" />
          <XformerlyTwitter className="w-5 h-5" />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
