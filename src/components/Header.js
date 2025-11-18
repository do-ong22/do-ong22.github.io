import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="brand-link">
        <h2>do_ong.io</h2>
      </Link>
      <nav>
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;