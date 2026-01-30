import Container from './container';
import { useState } from 'react';
import { techstack, tags } from '../lib/constants';
import TechCard from './tech-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Technologies = () => {
  const [filteredTech, setFilteredTech] = useState(techstack);
  const [activeTag, setActiveTag] = useState('all');

  const handleFilter = (tag: string) => {
    if (tag === 'all') {
      setFilteredTech(techstack);
    } else {
      setFilteredTech(techstack.filter((tech) => tech.tags.includes(tag)));
    }
  };

  return (
    <section className="bg-white min-w-0">
      <Container className="space-y-10 py-20 min-w-0">
        <h2 className="text-3xl">Technologies/Tools</h2>

        <div className="flex flex-wrap gap-2 justify-start">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => {
                handleFilter(tag);
                setActiveTag(tag);
              }}
              className={
                'py-2 px-4 rounded-full text-slate-600 capitalize text-xs font-semibold ' +
                (tag === activeTag
                  ? 'bg-orange-500 text-white border-transparent'
                  : 'bg-slate-100 hover:text-slate-900')
              }
            >
              {tag} {tag === activeTag && filteredTech.length}
            </button>
          ))}
        </div>

        <Swiper spaceBetween={16} slidesPerView={'auto'} freeMode className="">
          {filteredTech.map((tech) => (
            <SwiperSlide key={tech.name} style={{ width: 'auto' }}>
              <TechCard tech={tech} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Technologies;
