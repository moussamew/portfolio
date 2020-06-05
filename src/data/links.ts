interface ILink {
  id: number;
  title: string;
  page: string;
}

const headerLinks: ILink[] = [
  {
    id: 0,
    title: 'miskounene.com',
    page: '/',
  },
  {
    id: 1,
    title: 'Créations',
    page: '/creations',
  },
  {
    id: 2,
    title: 'Réflexions',
    page: '/reflexions',
  },
  {
    id: 3,
    title: `Un peu d'histoire`,
    page: '/histoire',
  },
];

export { headerLinks };
