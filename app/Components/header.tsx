// app/Components/header.tsx
import { Link } from 'react-router';
import Container from './container';
import Logo from './logo';
import { Mail, Mailbox } from 'lucide-react';
import { useGSAPAnimations } from '~/hooks/useGSAPAnimations';
import { useEffect } from 'react';

const Header = () => {
  const { elementRef, timelineRef } = useGSAPAnimations();

  useEffect(() => {
    if (!timelineRef.current) return;

    const tl = timelineRef.current;

    // Animate title
    tl.from(
      "header h1",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }
    )
    // Animate subtitle
    .from(
      "header p",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.6" // Start 0.6s before previous animation ends
    )
    // Animate buttons
    .from(
      "header .button-container",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.4"
    )
    // Animate logo
    .from(
      "header figure",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      },
      "-=0.8"
    );

  }, [timelineRef]);

  return (
    <header ref={elementRef} className="bg-white">
      <Container className="pt-10 sm:pt-30 pb-40 flex flex-col text-center items-center gap-6 justify-center">
        <figure className="hidden sm:block">
          <Logo />
        </figure>

        <article className="flex gap-4 items-center justify-center flex-col text-center">
          <h1 className="max-w-[20ch] text-5xl md:text-6xl">
            I enjoy turning ideas into real solutions for the web
          </h1>

          <p className="mt-5 max-w-md text-slate-600">
            I primarily work with <strong>JavaScript</strong>,{' '}
            <strong>TypeScript</strong>, and <strong>Cloudflare</strong> for infrastructure,{' '}
            leveraging these tools and their ecosystems to build for the web.
          </p>
        </article>

        <div className="button-container flex md:flex-row flex-col items-center gap-4 md:gap-4 mt-16">
          <Link to="/portfolio">
            <button className="bg-orange-500 py-3 px-10 rounded-full text-white">
              See my Portfolio
            </button>
          </Link>
          <Link to="/contact">
            <button className="text-slate-500 hover:text-slate-900 transition-all duration-300 border rounded-full border-slate-200 hover:border-slate-900 py-3 px-10 text-md flex items-center gap-2">
              Drop a message
              <Mailbox className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;