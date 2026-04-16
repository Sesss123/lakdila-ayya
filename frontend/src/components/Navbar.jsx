import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  ['/', 'Home'],
  ['/packages', 'Tour Packages'],
  ['/accommodation', 'Accommodation'],
  ['/transport', 'Transport'],
  ['/guides', 'Travel Guides'],
  ['/contact', 'Contact'],
];

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-primary text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link className="text-xl font-bold" to="/">
          GlobeTrek Adventures
        </Link>
        <nav className="hidden gap-4 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} className="text-sm hover:text-secondary" to={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          {user ? (
            <>
              <Link className="rounded bg-secondary px-3 py-1 text-slate-900" to={`/${user.role}`}>
                Dashboard
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link className="rounded bg-accent px-3 py-1 text-slate-900" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
