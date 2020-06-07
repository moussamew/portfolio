interface ILink {
  id: number;
  title: string;
  page: string;
}

const headerLinks: ILink[] = [
  {
    id: 0,
    title: 'Accueil',
    page: '/',
  },
  {
    id: 1,
    title: 'Projets',
    page: '/projects',
  },
  {
    id: 2,
    title: 'Articles',
    page: '/blog',
  },
  {
    id: 3,
    title: `Parcours`,
    page: '/story',
  },
];

export { headerLinks };
