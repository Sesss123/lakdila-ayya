import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/customer', label: 'Overview' },
  { href: '/customer/bookings', label: 'My Bookings' },
  { href: '/customer/booking-form', label: 'Booking Form' },
  { href: '/customer/payment', label: 'Payment' },
  { href: '/customer/inquiry', label: 'Inquiry' },
  { href: '/customer/profile', label: 'Profile' },
];

export default function CustomerDashboardPage() {
  return (
    <DashboardShell title="Customer Dashboard" links={links}>
      <div className="grid gap-4 md:grid-cols-3">
        {['Upcoming Trips', 'Pending Payments', 'Wishlist'].map((kpi) => (
          <div key={kpi} className="rounded-xl bg-white p-4 shadow"><p className="text-sm text-slate-600">{kpi}</p><p className="text-2xl font-bold text-primary">0</p></div>
        ))}
      </div>
    </DashboardShell>
  );
}
