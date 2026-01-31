import { Home, Mailbox } from 'lucide-react';
import { Link } from 'react-router';

const Portfolio = () => {
  return (
    <div className="grid place-items-center min-h-[60vh]">
      <article className="flex items-center text-center flex-col gap-10">
        <h1 className="text-6xl max-w-lg">This page will be ready soon</h1>
        <p className="text-lg text-slate-600 mb-4 max-w-lg">
          😏 My portfolio is currently under construction, but you can always
          reach out to me through the contact page.
        </p>

        <Link to="/contact">
          <button className="text-slate-500 hover:text-slate-900 transition-all duration-300 border rounded-full border-slate-200 hover:border-slate-900 py-3 px-10 text-md flex items-center gap-2">
            Contact me
            <Mailbox className="w-5 h-5" />
          </button>
        </Link>
      </article>
    </div>
  );
};

export default Portfolio;
