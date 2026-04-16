import DashboardShell from '../../components/DashboardShell';

const links = [
  { href: '/admin', label: 'System Overview' },
  { href: '/admin/users', label: 'Manage Users' },
  { href: '/admin/packages', label: 'Manage Packages' },
  { href: '/admin/reports', label: 'Reports & Analytics' },
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell title="Admin Dashboard" links={links}>
      <div className="grid gap-4 md:grid-cols-4">
        {['Revenue', 'Bookings', 'Users', 'Cancellations'].map((kpi) => (
          <div key={kpi} className="rounded-xl bg-white p-4 shadow"><p className="text-xs text-slate-500">{kpi}</p><p className="text-xl font-bold text-primary">--</p></div>
        ))}
      </div>
    </DashboardShell>
  );
}
