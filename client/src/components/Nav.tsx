import './nav.css';

import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/listing">listing</Link>
      </nav>
    </div>
  );
}
