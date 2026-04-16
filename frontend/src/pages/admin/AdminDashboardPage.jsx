import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/users', label: 'Manage Users' },
  { href: '/admin/packages', label: 'Manage Packages' },
  { href: '/admin/reports', label: 'Reports & Analytics' },
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell title="Admin Dashboard" links={links}>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="text-lg font-semibold text-blue-900">System Summary</h3>
        <p className="text-sm text-slate-700">Total users: 125</p>
        <p className="text-sm text-slate-700">Total bookings: 38</p>
        <p className="text-sm text-slate-700">Pending inquiries: 6</p>
        <button className="mt-3 rounded bg-blue-900 px-4 py-2 text-white">Generate Report</button>
      </div>
    </DashboardShell>
  );
}
