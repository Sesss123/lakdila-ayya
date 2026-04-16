import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
