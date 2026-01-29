import Container from './container';
import { Link } from 'react-router';
import TechCard from './tech-card';
import { techstack, experiences, tags } from '../lib/constants';
import { useState } from 'react';
import { BookText, File, FileText } from 'lucide-react';
import Experience from './experience';
import Articles from './articles';

const About = () => {
  const [filteredTech, setFilteredTech] = useState(techstack);
  const [activeTag, setActiveTag] = useState('all');

  const [activeExperience, setActiveExperience] = useState(
    experiences.technoville,
  );

  const handleFilter = (tag: string) => {
    if (tag === 'all') {
      setFilteredTech(techstack);
    } else {
      setFilteredTech(techstack.filter((tech) => tech.tags.includes(tag)));
    }
  };

  return (
    <section className="grid gap-10 bg-slate-50 py-10 sm:py-20 md:py-30">
      <Container className="grid gap-10 sm:gap-20 items-center justify-center grid-cols-1 md:grid-cols-2">
        <div className="grid gap-6 place-items-center justify-center sm:justify-end">
          <figure className="rounded-full overflow-hidden w-80 sm:w-90 h-80 sm:h-90">
            <img
              src="avatar-two.png"
              className="hover:scale-110 transition-all duration-300 w-full h-full object-cover"
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
              <h1 className="text-5xl sm:text-5xl">
                Hi, I'm <span className="font-bold">Israel</span>
              </h1>
              <figure className="w-16 sm:w-16 h-16 sm:h-16 overflow-hidden">
                <img
                  src="waving.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <p className="mt-5 text-md max-w-[50ch] text-slate-600">
              I'm a Web Developer with a passion for crafting clean, scalable
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

      <Container className="py-20 sm:py-20 space-y-10 text-center sm:text-left">
        <h2 className="text-4xl">Experiences/Teams</h2>

        <div id="experience" className="grid grid-cols-1 gap-10">
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-2 rounded-2xl">
            {Object.entries(experiences).map(([key, value]) => {
              return (
                <button
                  className={
                    'px-4 py-1 text-sm rounded-full transition-all duration-200 ' +
                    (activeExperience === value
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-600 bg-slate-50 hover:text-slate-900')
                  }
                  onClick={() => setActiveExperience(value)}
                  key={key}
                >
                  {value.company}
                </button>
              );
            })}
          </nav>
          <section className="bg-white min-h-80 text-left border border-slate-200 rounded-2xl p-8 sm:p-10">
            <img
              className="w-50"
              src={activeExperience.logo}
              alt={activeExperience.company}
            />

            <article className="py-10">
              <p>
                <strong>{activeExperience.position}</strong> @ {activeExperience.company}
              </p>
              <p>{activeExperience.type}</p>
            </article>

            <p className="text-slate-600 text-lg">
              {activeExperience.description}
            </p>

            <p className="mt-8">{activeExperience.duration}</p>
          </section>
        </div>
      </Container>

      <Articles />

      <Container className="space-y-10 py-20">
        <h2 className="text-4xl">Technologies/Tools</h2>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => {
                handleFilter(tag);
                setActiveTag(tag);
              }}
              className={
                'py-1.5 px-4 rounded-full text-slate-600 capitalize text-sm ' +
                (tag === activeTag
                  ? 'bg-orange-500 text-white border-transparent'
                  : 'bg-slate-50 hover:text-slate-900')
              }
            >
              {tag}
            </button>
          ))}
        </div>

        <div
          id="techstack"
          className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {filteredTech.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
