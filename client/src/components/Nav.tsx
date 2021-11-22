import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/listing">listing</Link>
    </nav>
  );
}
