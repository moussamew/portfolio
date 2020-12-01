interface ILink {
  title: string;
  page: string;
}

const headerLinks: ILink[] = [
  {
    title: 'Articles',
    page: '/blog',
  },
  {
    title: 'Parcours',
    page: '/cv',
  },
  {
    title: 'Clients',
    page: '/clients',
  },
];

export { headerLinks };
