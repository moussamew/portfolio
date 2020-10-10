interface ILink {
  title: string;
  page: string;
}

const headerLinks: ILink[] = [
  {
    title: 'CV',
    page: '/cv',
  },
];

// eslint-disable-next-line import/prefer-default-export
export { headerLinks };
