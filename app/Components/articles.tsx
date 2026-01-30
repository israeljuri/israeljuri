import { ExternalLink, Link2 } from 'lucide-react';
import Container from './container';
import { Link } from 'react-router';

const Articles = () => {
  return (
    <section className='py-10'>
      <Container className="">
        <section className="relative overflow-hidden bg-orange-500 text-white grid place-items-center rounded-2xl p-20 min-h-120">
          <img
            src="articles.jpg"
            alt=""
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-full z-5 bg-black/10 backdrop-blur-2xl"></div>
          <article className="absolute top-0 left-0 w-full h-full z-10 flex flex-col gap-10 items-center justify-center px-6">
            <h2 className="text-4xl sm:text-5xl max-w-[20ch] text-center text-white">
              I write about the intrinsic parts of JavaScript
            </h2>

            <Link to="https://israeljuri.hashnode.dev" target="_blank">
              <button className="text-white cursor-pointer border-b border-transparent hover:border-white transition-all duration-300 py-3 px-2 text-md flex items-center gap-2">
                Read my Articles
                <ExternalLink className="w-5 h-5" />
              </button>
            </Link>
          </article>
        </section>
      </Container>
    </section>
  );
};

export default Articles;
