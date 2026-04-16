import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-10 text-white">
        <h1 className="text-4xl font-bold">Plan Your Next Adventure with GlobeTrek</h1>
        <p className="mt-3 max-w-2xl">Search, customize, and book premium travel experiences with confidence.</p>
        <div className="mt-6 flex gap-3">
          <Link className="rounded bg-accent px-4 py-2 font-semibold text-slate-900" to="/packages">Explore Packages</Link>
          <Link className="rounded border border-white px-4 py-2" to="/register">Start Planning</Link>
        </div>
      </div>
    </section>
  );
}
