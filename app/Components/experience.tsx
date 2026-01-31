import { useState, useEffect, useRef } from 'react';
import Container from './container';
import { experiences } from '../lib/constants';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(
    experiences.technoville,
  );
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const experienceKeys = Object.keys(experiences);
  
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveExperience((current) => {
          const currentKey = experienceKeys.find(
            (key) => experiences[key as keyof typeof experiences] === current,
          );
          const currentIndex = experienceKeys.indexOf(currentKey!);
          const nextIndex = (currentIndex + 1) % experienceKeys.length;
          return experiences[
            experienceKeys[nextIndex] as keyof typeof experiences
          ];
        });
      }, 3000); // Change experience every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleExperienceClick = (
    experience: (typeof experiences)[keyof typeof experiences],
  ) => {
    setActiveExperience(experience);
    setIsPaused(true);

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="bg-white">
      <Container className="py-20 sm:py-20 space-y-10 sm:text-left">
        <h2 className="text-3xl">Experiences/Teams</h2>

        <div
          id="experience"
          className="grid grid-cols-1 gap-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <nav className="flex flex-wrap items-center justify-start gap-2 rounded-2xl">
            {Object.entries(experiences).map(([key, value]) => {
              const isActive = value === activeExperience;

              return (
                <button
                  className={`px-4 py-1 text-xs rounded-full text-slate-600 ${
                    isActive
                      ? 'bg-orange-500 text-white border-transparent'
                      : 'border border-slate-200'
                  }`}
                  onClick={() => handleExperienceClick(value)}
                  key={key}
                >
                  {value.company}
                </button>
              );
            })}

            {/* Progress indicator */}
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all duration-300"
                  style={{
                    width: isPaused ? '0%' : '100%',
                    animation: !isPaused
                      ? 'progress 3s linear infinite'
                      : 'none',
                  }}
                />
              </div>
              <span className="text-xs text-slate-500">
                {isPaused ? 'Paused' : 'Auto-playing'}
              </span>
            </div>
          </nav>

          <section className="bg-white min-h-80 text-left border border-slate-200 rounded-2xl p-8 sm:p-10 transition-all duration-500 ease-in-out">
            <article className="space-y-2">
              <img
                className="w-50 rounded-full transition-all duration-300"
                src={activeExperience.logo}
                alt={activeExperience.company}
              />
              <p>
                <strong>{activeExperience.position}</strong> @{' '}
                {activeExperience.company}
              </p>
            </article>

            <p className="py-10 text-slate-600 transition-opacity duration-300">
              {activeExperience.description}
            </p>

            <p className="text-sm text-slate-500">{activeExperience.type}</p>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
