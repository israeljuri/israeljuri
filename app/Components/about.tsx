// app/Components/about.tsx
import Container from './container';
import { Link } from 'react-router';
import { FileText } from 'lucide-react';
import { about } from '~/lib/constants';
import { useGSAPAnimations } from '~/hooks/useGSAPAnimations';
import { useEffect } from 'react';

const About = () => {
  const { elementRef, timelineRef } = useGSAPAnimations();

  useEffect(() => {
    if (!timelineRef.current) return;
 
    const tl = timelineRef.current;
 
    // Animate image (like the logo in header)
    tl.from(
      ".about-image",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }
    )
    // Animate title (like h1 in header)
    .from(
      ".about-title",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.6"
    )
    // Animate paragraphs with stagger (like subtitle in header)
    .from(
      ".about-paragraph",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15
      },
      "-=0.6"
    )
    // Animate CTA button (like buttons in header)
    .from(
      ".about-cta",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.4"
    );
 
  }, [timelineRef]);

  return (
    <section ref={elementRef} className="grid gap-20 bg-white py-20 md:py-30">
      <Container className="grid gap-10 sm:gap-20 items-start justify-center grid-cols-1 md:grid-cols-2">
        <div className="about-image grid gap-6 place-items-center justify-center sm:justify-end">
          <figure className="rounded-3xl overflow-hidden w-60 sm:w-80 h-60 sm:h-80">
            <img
              src="avatar-two.png"
              className="scale-120 w-full h-full object-cover"
              alt="Israel Juri"
            />
          </figure>

          <Link to="/resume.pdf" target="_blank" download>
            <button className="text-slate-500 hover:text-slate-900 transition-all duration-300 border rounded-full border-slate-200 hover:border-slate-900 py-3 px-10 text-md flex items-center gap-2">
              Get my Résumé
              <FileText className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <section className="space-y-10 flex flex-col items-center sm:items-start px-2 sm:px-0">
          <article className="text-center sm:text-left space-y-8">
            <div className="about-title flex sm:flex-row flex-col justify-center sm:justify-start items-center gap-2">
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
                className="about-paragraph text-md max-w-[50ch] text-slate-700 bg-white p-4 rounded-2xl border border-slate-200"
              >
                {item.paragraph}
              </p>
            ))}
          </article>
        </section>
      </Container>
    </section>
  );
};

export default About;
