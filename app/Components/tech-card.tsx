import { techstack } from '../lib/constants';

interface TechCardProps {
  tech: (typeof techstack)[number];
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <article className="w-50 bg-white border border-slate-200 group min-h-60 rounded-2xl p-4 flex gap-10 flex-col items-center justify-center">
      <span className="w-10 h-10 group-hover:scale-120 transition-all duration-300">
        {tech.icon}
      </span>
      <h2 className="text-lg text-slate-600">{tech.name}</h2>
    </article>
  );
};

export default TechCard;
