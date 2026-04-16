import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

export default function PackageDetailsPage() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    api.get(`/packages/${id}`).then((res) => setPkg(res.data));
  }, [id]);

  if (!pkg) return <p>Loading...</p>;

  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-3xl font-bold text-primary">{pkg.title}</h2>
      <p className="text-slate-600">{pkg.destination} · {pkg.duration} days</p>
      <p className="mt-4">{pkg.description}</p>
      <p className="mt-4 text-2xl font-bold text-accent">${pkg.price}</p>
      <Link className="mt-4 inline-block rounded bg-primary px-4 py-2 text-white" to="/customer/booking-form">Book Now</Link>
    </section>
  );
}
