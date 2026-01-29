import { Link } from 'react-router';
import Container from './container';
import Logo from './logo';
import {  Mailbox } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <Container className="h-screen flex flex-col text-center items-center gap-6 justify-center">
        <figure className="hidden sm:block">
          <Logo />
        </figure>

        <article className="flex gap-4 items-center justify-center flex-col text-center">
          <h1 className="max-w-[20ch] text-6xl">
            I enjoy turning ideas into real solutions for the web
          </h1>

          <p className="mt-5 max-w-md text-slate-600">
            I primarily work with <strong>JavaScript</strong> and <strong>Typescript</strong>{' '}
           leveraging <strong>Cloudflare</strong> and the tools across their
            eco-systems.
          </p>
        </article>

        <div className="flex md:flex-row flex-col items-center gap-4 md:gap-4 mt-16">
          <Link to="">
            <button className="bg-orange-500 py-3 px-10 text-lg rounded-full text-white">
              Go to Portfolio
            </button>
          </Link>
          <Link to="">
            <button className="text-slate-500 hover:text-slate-900 transition-all duration-300 border-b border-slate-500 sm:border-transparent hover:border-slate-900 py-3 px-2 text-md flex items-center gap-2">
              Drop a message
              <Mailbox />
            </button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
