import React, { useState } from 'react';
import Container from './container';
import { experiences } from '../lib/constants';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(
    experiences.technoville,
  );

  return (
    <Container className="py-20 sm:py-20 space-y-10 sm:text-left">
      <h2 className="text-3xl">Experiences/Teams</h2>

      <div id="experience" className="grid grid-cols-1 gap-10">
        <nav className="flex flex-wrap items-center justify-start gap-2 rounded-2xl">
          {Object.entries(experiences).map(([key, value]) => {
            return (
              <button
                className={
                  'px-4 py-2 text-sm rounded-full ' +
                  (activeExperience === value
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-600 bg-slate-100 hover:text-slate-900')
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

          <article className="py-10 space-y-4">
            <p>
              <strong>{activeExperience.position}</strong> @{' '}
              {activeExperience.company}
            </p>
          </article>

          <p className="text-slate-600 text-lg">
            {activeExperience.description}
          </p>

          <p className="text-slate-600 mt-10">{activeExperience.type}</p>
        </section>
      </div>
    </Container>
  );
};

export default Experience;
