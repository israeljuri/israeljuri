import type { Route } from './+types/home';

import Articles from '../Components/articles';

import ContactComponent from '~/Components/contact';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact — Israel Juri' },
    {
      name: 'description',
      content: 'I enjoy turning ideas in to real solutions for the web.',
    },
  ];
}

export default function Contact() {
  return (
    <>
      <ContactComponent />
      <Articles />
    </>
  );
}
