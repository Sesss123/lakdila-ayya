import { Link } from 'react-router-dom';

export default function DashboardShell({ title, links, children }) {
  return (
    <div className="grid gap-6 md:grid-cols-[220px,1fr]">
      <aside className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-3 text-lg font-bold text-primary">{title}</h2>
        <nav className="space-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} className="block rounded px-2 py-1 hover:bg-slate-100" to={l.href}>{l.label}</Link>
          ))}
        </nav>
      </aside>
      <section className="space-y-4">{children}</section>
    </div>
  );
}
