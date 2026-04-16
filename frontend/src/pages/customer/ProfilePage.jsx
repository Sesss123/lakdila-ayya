import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/customer', label: 'Overview' },
  { href: '/customer/bookings', label: 'My Bookings' },
  { href: '/customer/booking-form', label: 'Booking Form' },
  { href: '/customer/payment', label: 'Payment' },
  { href: '/customer/inquiry', label: 'Inquiry' },
  { href: '/customer/profile', label: 'Profile' },
];

export default function ProfilePage() {
  return (
    <DashboardShell title="Customer Dashboard" links={links}>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-lg font-semibold text-blue-900">My Profile</h3>
        <p className="text-sm text-slate-700">Name: Demo Customer</p>
        <p className="text-sm text-slate-700">Email: customer@globetrek.com</p>
        <button className="mt-3 rounded bg-blue-900 px-4 py-2 text-white">Edit Profile</button>
      </div>
    </DashboardShell>
  );
}
