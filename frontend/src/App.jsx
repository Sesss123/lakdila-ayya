import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/public/HomePage';
import TourPackagesPage from './pages/public/TourPackagesPage';
import PackageDetailsPage from './pages/public/PackageDetailsPage';
import AccommodationPage from './pages/public/AccommodationPage';
import TransportPage from './pages/public/TransportPage';
import TravelGuidesPage from './pages/public/TravelGuidesPage';
import ContactPage from './pages/public/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage';
import MyBookingsPage from './pages/customer/MyBookingsPage';
import BookingFormPage from './pages/customer/BookingFormPage';
import PaymentPage from './pages/customer/PaymentPage';
import InquiryPage from './pages/customer/InquiryPage';
import ProfilePage from './pages/customer/ProfilePage';
import StaffDashboardPage from './pages/staff/StaffDashboardPage';
import ManageBookingsPage from './pages/staff/ManageBookingsPage';
import UpdatePackagesPage from './pages/staff/UpdatePackagesPage';
import RespondInquiriesPage from './pages/staff/RespondInquiriesPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import ManagePackagesPage from './pages/admin/ManagePackagesPage';
import ReportsPage from './pages/admin/ReportsPage';

export default function App() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<TourPackagesPage />} />
        <Route path="/packages/:id" element={<PackageDetailsPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/guides" element={<TravelGuidesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/customer" element={<ProtectedRoute roles={['customer']}><CustomerDashboardPage /></ProtectedRoute>} />
        <Route path="/customer/bookings" element={<ProtectedRoute roles={['customer']}><MyBookingsPage /></ProtectedRoute>} />
        <Route path="/customer/booking-form" element={<ProtectedRoute roles={['customer']}><BookingFormPage /></ProtectedRoute>} />
        <Route path="/customer/payment" element={<ProtectedRoute roles={['customer']}><PaymentPage /></ProtectedRoute>} />
        <Route path="/customer/inquiry" element={<ProtectedRoute roles={['customer']}><InquiryPage /></ProtectedRoute>} />
        <Route path="/customer/profile" element={<ProtectedRoute roles={['customer']}><ProfilePage /></ProtectedRoute>} />

        <Route path="/staff" element={<ProtectedRoute roles={['staff']}><StaffDashboardPage /></ProtectedRoute>} />
        <Route path="/staff/bookings" element={<ProtectedRoute roles={['staff']}><ManageBookingsPage /></ProtectedRoute>} />
        <Route path="/staff/packages" element={<ProtectedRoute roles={['staff']}><UpdatePackagesPage /></ProtectedRoute>} />
        <Route path="/staff/inquiries" element={<ProtectedRoute roles={['staff']}><RespondInquiriesPage /></ProtectedRoute>} />

        <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboardPage /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute roles={['admin']}><ManageUsersPage /></ProtectedRoute>} />
        <Route path="/admin/packages" element={<ProtectedRoute roles={['admin']}><ManagePackagesPage /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute roles={['admin']}><ReportsPage /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PublicLayout>
  );
}
