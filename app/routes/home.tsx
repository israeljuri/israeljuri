import type { Route } from './+types/home';
import Header from '../Components/header';
import About from '../Components/about';
import Experience from '../Components/experience';
import Articles from '../Components/articles';
import Technologies from '../Components/technologies';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Israel Juri — Web Developer' },
    {
      name: 'description',
      content: 'I enjoy turning ideas in to real solutions for the web.',
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header />

      <About />

      <Experience />

      <Articles />

      <Technologies />
    </>
  );
}
