import { Link } from 'gatsby';
import React from 'react';
import { headerLinks } from '../../data/links';
import { H3 } from '../../atomic/Heading';

function Header(): JSX.Element {
  return (
    <header>
      <div>
        {headerLinks.map((link) => (
          <H3 key={link.id}>
            <Link to={link.page}>{link.title}</Link>
          </H3>
        ))}
      </div>
    </header>
  );
}

export default Header;
