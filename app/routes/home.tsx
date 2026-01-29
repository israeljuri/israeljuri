import type { Route } from './+types/home';
import Header from '../Components/header';
import About from '../Components/about';

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
    </>
  );
}
