import { Link } from 'gatsby';
import React from 'react';
import { headerLinks } from '../../data/links';

const Header = (): JSX.Element => (
  <header>
    <div>
      {headerLinks.map(link => (
        <h1 key={link.id}>
          <Link to="/">{link.title}</Link>
        </h1>
      ))}
    </div>
  </header>
);

export default Header;
