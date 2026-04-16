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

export default function PaymentPage() {
  const [message, setMessage] = useState('');

  return (
    <DashboardShell title="Customer Dashboard" links={links}>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-lg font-semibold text-blue-900">Payment (Mock)</h3>
        <input className="mb-3 w-full rounded border p-2" placeholder="Card Number" />
        <input className="mb-3 w-full rounded border p-2" placeholder="Name on Card" />
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded border p-2" placeholder="MM/YY" />
          <input className="rounded border p-2" placeholder="CVV" />
        </div>
        <button className="mt-3 rounded bg-orange-400 px-4 py-2 font-semibold" onClick={() => setMessage('Payment successful (demo).')}>
          Pay Now
        </button>
        {message && <p className="mt-3 text-green-700">{message}</p>}
      </div>
    </DashboardShell>
  );
}
