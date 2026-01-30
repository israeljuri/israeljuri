import Container from './container';
import { Link } from 'react-router';
import { FileText } from 'lucide-react';
import { about } from '~/lib/constants';

const About = () => {
  return (
    <section className="grid gap-20 bg-slate-100 py-20 md:py-30">
      <Container className="grid gap-10 sm:gap-20 items-start justify-center grid-cols-1 md:grid-cols-2">
        <div className="grid gap-6 place-items-center justify-center sm:justify-end">
          <figure className="rounded-3xl overflow-hidden w-60 sm:w-80 h-60 sm:h-80">
            <img
              src="avatar-two.png"
              className="scale-120 w-full h-full object-cover"
              alt="Israel Juri"
            />
          </figure>
        </div>

        <section className="space-y-10 flex flex-col items-center sm:items-start px-2 sm:px-0">
          <article className="text-center sm:text-left space-y-8 ">
            <div className="flex sm:flex-row flex-col justify-center sm:justify-start items-center gap-2">
              <figure className="block sm:hidden w-14 sm:w-14 h-14 sm:h-14 overflow-hidden">
                <img
                  src="waving.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>
              <h1 className="text-3xl sm:text-4xl">
                Welcome, I'm <span className="font-bold">Israel</span>
              </h1>
              <figure className="hidden sm:block w-14 sm:w-14 h-14 sm:h-14 overflow-hidden">
                <img
                  src="waving.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>

            {about.map((item, index) => (
              <p
                key={index}
                className="text-md max-w-[50ch] text-slate-700 bg-white p-4 rounded-2xl"
              >
                {item.paragraph}
              </p>
            ))}
          </article>
          <Link to="/resume.pdf" target="_blank" download>
            <button className="text-slate-500 text-sm hover:text-slate-900 transition-all duration-300 border-b border-slate-500  hover:border-slate-900 py-3 px-2 flex items-center gap-2">
              Get my Résumé
              <FileText className="w-4 h-4" />
            </button>
          </Link>
        </section>
      </Container>
    </section>
  );
};

export default About;
