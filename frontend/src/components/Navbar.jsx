import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold">GlobeTrek Adventures</Link>

        <nav className="hidden gap-3 text-sm md:flex">
          <Link to="/packages">Packages</Link>
          <Link to="/accommodation">Accommodation</Link>
          <Link to="/transport">Transport</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 text-sm">
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link className="rounded bg-orange-400 px-2 py-1 text-black" to="/register">Register</Link>}
          {user && <Link className="rounded bg-teal-400 px-2 py-1 text-black" to={`/${user.role}`}>Dashboard</Link>}
          {user && <button onClick={logout}>Logout</button>}
        </div>
      </div>
    </header>
  );
}
