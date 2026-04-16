import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/customer', label: 'Overview' },
  { href: '/customer/bookings', label: 'My Bookings' },
  { href: '/customer/booking-form', label: 'Booking Form' },
  { href: '/customer/payment', label: 'Payment' },
  { href: '/customer/inquiry', label: 'Inquiry' },
  { href: '/customer/profile', label: 'Profile' },
];

export default function MyBookingsPage() {
  const rows = [
    { id: 'BK001', pkg: 'Sigiriya Weekend Tour', status: 'pending' },
    { id: 'BK002', pkg: 'Ella Adventure', status: 'confirmed' },
  ];

  return (
    <DashboardShell title="Customer Dashboard" links={links}>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-lg font-semibold text-blue-900">My Bookings</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Booking ID</th>
              <th className="py-2 text-left">Package</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="py-2">{r.id}</td>
                <td className="py-2">{r.pkg}</td>
                <td className="py-2 capitalize">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
