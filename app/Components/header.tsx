import { Link } from 'react-router';
import Container from './container';
import Logo from './logo';
import {  Mail, Mailbox } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <Container className="pt-10 sm:pt-30 pb-40 flex flex-col text-center items-center gap-6 justify-center">
        <figure className="hidden sm:block">
          <Logo />
        </figure>

        <article className="flex gap-4 items-center justify-center flex-col text-center">
          <h1 className="max-w-[20ch] text-5xl md:text-6xl">
            I enjoy turning ideas into real solutions for the web
          </h1>

          <p className="mt-5 max-w-lg text-slate-600">
            I primarily work with <strong>JavaScript</strong>, <strong>Typescript</strong> and {' '}
            <strong>Cloudflare</strong> leveraging the tools across their eco-systems to build.
          </p>
        </article>

        <div className="flex md:flex-row flex-col items-center gap-4 md:gap-4 mt-16">
          <Link to="">
            <button className="bg-orange-500 py-3 px-10 rounded-full text-white">
              See my Portfolio
            </button>
          </Link>
          <Link to="">
            <button className="text-slate-500 hover:text-slate-900 transition-all duration-300 border-b border-slate-500 sm:border-transparent hover:border-slate-900 py-3 px-2 text-md flex items-center gap-2">
              Get in touch
              <Mail className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
