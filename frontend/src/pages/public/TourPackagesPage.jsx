import { useEffect, useState } from 'react';
import PackageCard from '../../components/PackageCard';
import api from '../../services/api';

export default function TourPackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/packages').then((res) => setPackages(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-primary">Tour Packages</h2>
      {loading ? <p>Loading packages...</p> : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)}
        </div>
      )}
    </section>
  );
}
