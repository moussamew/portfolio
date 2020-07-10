interface ILink {
  title: string;
  page: string;
}

const headerLinks: ILink[] = [
  {
    title: 'Projets',
    page: '/projects',
  },
  {
    title: 'Articles',
    page: '/blog',
  },
  {
    title: `Parcours`,
    page: '/cv',
  },
];

// eslint-disable-next-line import/prefer-default-export
export { headerLinks };
