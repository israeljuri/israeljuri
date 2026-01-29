import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Israel Juri — Web Developer' },
    {
      name: 'description',
      content: 'I enjoy turning ideas in to digital solutions on the web.',
    },
  ];
}

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="font-bold text-2xl">Welcome to my Porfolio</h1>
      <h4>Hi there, nice to meet you.</h4>
      <p>I enjoy turning ideas in to digital solutions on the web.</p>
      <p>
        Using React and Cloudflare as well as their eco-system as my primary
        tools.
      </p>
      <p>
        I'm currently based in Lagos, Nigeria but I'm open to working with
        brillant and innovative individuals.
      </p>
    </main>
  );
}
