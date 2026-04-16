import { Link } from 'react-router-dom';

export default function PackageCard({ pkg }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow">
      <h3 className="text-lg font-semibold text-primary">{pkg.title}</h3>
      <p className="text-sm text-slate-600">{pkg.destination}</p>
      <p className="mt-2 text-sm text-slate-700">{pkg.duration} days</p>
      <p className="text-lg font-bold text-accent">${pkg.price}</p>
      <Link className="mt-3 inline-block rounded bg-primary px-3 py-2 text-sm text-white" to={`/packages/${pkg._id}`}>
        View Details
      </Link>
    </article>
  );
}
