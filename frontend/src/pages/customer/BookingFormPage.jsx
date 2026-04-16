import { useState } from 'react';
import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/customer', label: 'Overview' },
  { href: '/customer/bookings', label: 'My Bookings' },
  { href: '/customer/booking-form', label: 'Booking Form' },
  { href: '/customer/payment', label: 'Payment' },
  { href: '/customer/inquiry', label: 'Inquiry' },
  { href: '/customer/profile', label: 'Profile' },
];

export default function BookingFormPage() {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage('Booking form submitted (demo).');
  };

  return (
    <DashboardShell title="Customer Dashboard" links={links}>
      <form onSubmit={onSubmit} className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-lg font-semibold text-blue-900">Booking Form</h3>
        <input className="mb-3 w-full rounded border p-2" placeholder="Package ID" required />
        <input className="mb-3 w-full rounded border p-2" placeholder="Travel Date" type="date" required />
        <input className="mb-3 w-full rounded border p-2" placeholder="Number of Travelers" type="number" min="1" required />
        <button className="rounded bg-blue-900 px-4 py-2 text-white">Submit Booking</button>
        {message && <p className="mt-3 text-green-700">{message}</p>}
      </form>
    </DashboardShell>
  );
}
