import Container from './container';
import { Link } from 'react-router';
import { FileText } from 'lucide-react';

import Articles from './articles';
import Technologies from './technologies';
import Experience from './experience';

const About = () => {
  return (
    <section className="grid gap-10 bg-slate-50 py-10 sm:py-20 md:py-30">
      <Container className="grid gap-10 sm:gap-20 items-center justify-center grid-cols-1 md:grid-cols-2">
        <div className="grid gap-6 place-items-center justify-center sm:justify-end">
          <figure className="rounded-full overflow-hidden w-60 sm:w-80 h-60 sm:h-80">
            <img
              src="avatar-two.png"
              className="scale-110 hover:scale-115 transition-all duration-300 w-full h-full object-cover"
              alt="Israel Juri"
            />
          </figure>

          <Link to="/resume.pdf" target="_blank" download>
            <button className="text-slate-500 text-sm hover:text-slate-900 transition-all duration-300 border-b border-slate-500 sm:border-transparent hover:border-slate-900 py-3 px-2 flex items-center gap-2">
              Get Résumé
              <FileText className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <section className="space-y-10 flex flex-col items-center sm:items-start">
          <article className="text-center sm:text-left space-y-10">
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <h1 className="text-5xl sm:text-4xl">
                Hi, I'm <span className="font-bold">Israel</span>
              </h1>
              <figure className="w-14 sm:w-14 h-14 sm:h-14 overflow-hidden">
                <img
                  src="waving.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <p className="mt-5 text-md max-w-[50ch] text-slate-600">
              I'm a web developer with a passion for crafting clean, scalable
              user interfaces and everything that powers the backend.
            </p>

            <p className="mt-5 text-md max-w-[50ch] text-slate-600">
              I started my journey hacking together websites using HTML, CSS and
              JavaScript. That curiosity quickly grew into a deep interest in
              building thoughtful, user-focused interfaces.
            </p>

            <p className="mt-5 text-md max-w-[50ch] text-slate-600">
              From libraries to frameworks, you can check out
              <Link to="#techstack" className="text-blue-500">
                {' '}
                my tech stack here.
              </Link>{' '}
              I've had the previledge of working with some truly interresting
              individuals and startups over the past five years.
            </p>
          </article>
        </section>
      </Container>

      <Experience />

      <Articles />

      <Technologies />
    </section>
  );
};

export default About;
