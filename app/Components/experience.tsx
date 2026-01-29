import { experiences } from '../lib/constants';

interface ExperienceProps {
  experience: (typeof experiences)[keyof typeof experiences];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <article>
      <figure>
        <img src={experience.logo} alt="" />
      </figure>
      <h2>{experience.company}</h2>
      <p>{experience.position}</p>
      <p>{experience.duration}</p>
      <p>{experience.type}</p>
      <p>{experience.description}</p>
    </article>
  );
};

export default Experience;
