import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section>
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-blue-900">Welcome to GlobeTrek Adventures</h1>
        <p className="mt-2 text-slate-700">
          We are a travel company in Negombo. You can search tour packages, make bookings, and send inquiries using this website.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded bg-blue-900 px-4 py-2 text-white" to="/packages">View Packages</Link>
          <Link className="rounded bg-orange-400 px-4 py-2 font-semibold text-black" to="/register">Create Account</Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-semibold text-blue-900">Search</h2>
          <p className="text-sm text-slate-700">Find tours by destination, price and duration.</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-semibold text-blue-900">Book</h2>
          <p className="text-sm text-slate-700">Book your selected tour package in a few steps.</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="font-semibold text-blue-900">Manage</h2>
          <p className="text-sm text-slate-700">Track booking status and payments in your dashboard.</p>
        </div>
      </div>
    </section>
  );
}
