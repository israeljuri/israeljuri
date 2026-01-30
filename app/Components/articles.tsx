import { ExternalLink, Link2 } from 'lucide-react';
import Container from './container';
import { Link } from 'react-router';

const Articles = () => {
  return (
    <Container className="">
      <section className="relative overflow-hidden bg-orange-500 text-white grid place-items-center rounded-2xl p-20 min-h-[30rem]">
        <img
          src="articles.jpg"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className='absolute top-0 left-0 w-full h-full z-5 bg-black/20 backdrop-blur-xl'></div>
        <article className="absolute top-0 left-0 w-full h-full z-10 flex flex-col gap-10 items-center justify-center px-6">
          <h2 className="text-5xl sm:text-6xl max-w-[20ch] text-center text-white">
            I write about the intrinsic parts of JavaScript
          </h2>

          <Link to="https://israeljuri.hashnode.dev" target='_blank'>
            <button className="text-orange-200 hover:text-orange-100 transition-all duration-300 border-b border-orange-200 sm:border-orange-200 hover:border-orange-100 py-3 px-2 text-md flex items-center gap-2">
              Read my Articles
              <ExternalLink />
            </button>
          </Link>
        </article>
      </section>
    </Container>
  );
};

export default Articles;
