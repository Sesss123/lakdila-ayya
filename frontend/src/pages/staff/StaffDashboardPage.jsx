import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/staff', label: 'Overview' },
  { href: '/staff/bookings', label: 'Manage Bookings' },
  { href: '/staff/packages', label: 'Update Packages' },
  { href: '/staff/inquiries', label: 'Respond Inquiries' },
];

export default function StaffDashboardPage() {
  const tasks = [
    'Check pending bookings',
    'Update package prices',
    'Reply to customer inquiries',
  ];

  return (
    <DashboardShell title="Staff Dashboard" links={links}>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-2 text-lg font-semibold text-blue-900">Today Tasks</h3>
        <ul className="list-disc pl-5 text-sm text-slate-700">
          {tasks.map((task) => <li key={task}>{task}</li>)}
        </ul>
      </div>
    </DashboardShell>
  );
}
