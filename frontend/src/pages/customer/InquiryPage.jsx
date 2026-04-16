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

export default function InquiryPage() {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage('Inquiry sent successfully (demo).');
  };

  return (
    <DashboardShell title="Customer Dashboard" links={links}>
      <form className="rounded-lg bg-white p-4 shadow" onSubmit={onSubmit}>
        <h3 className="mb-3 text-lg font-semibold text-blue-900">Send Inquiry</h3>
        <select className="mb-3 w-full rounded border p-2">
          <option>Package Question</option>
          <option>Payment Issue</option>
          <option>Cancellation</option>
        </select>
        <textarea className="mb-3 w-full rounded border p-2" rows="4" placeholder="Write your message" required />
        <button className="rounded bg-blue-900 px-4 py-2 text-white">Send</button>
        {message && <p className="mt-3 text-green-700">{message}</p>}
      </form>
    </DashboardShell>
  );
}
