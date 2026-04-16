import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/staff', label: 'Overview' },
  { href: '/staff/bookings', label: 'Manage Bookings' },
  { href: '/staff/packages', label: 'Update Packages' },
  { href: '/staff/inquiries', label: 'Respond Inquiries' },
];

export default function StaffDashboardPage() {
  return (
    <DashboardShell title="Staff Dashboard" links={links}>
      <div className="rounded-xl bg-white p-4 shadow">Operational queue and task management panel.</div>
    </DashboardShell>
  );
}
