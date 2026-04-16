# GlobeTrek Adventures - Simple Full-Stack Project

This project is written in a **beginner-friendly way** for a university assignment.

## 1. Technology Used
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT

## 2. Folder Structure
```text
frontend/
  src/
    components/
    context/
    layouts/
    pages/
      public/
      auth/
      customer/
      staff/
      admin/
    services/
backend/
  config/
  controllers/
  middleware/
  models/
  routes/
```

## 3. Main Features
- User register and login
- Role-based dashboards (customer, staff, admin)
- Tour package list and package details
- Booking API
- Inquiry API
- Admin-only package creation API
- Wishlist field in user model
- Booking status tracking

## 4. API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/packages`
- `GET /api/packages/:id`
- `POST /api/packages` (admin)
- `POST /api/book`
- `GET /api/my-bookings`
- `POST /api/inquiry`
- `GET /api/inquiries` (staff/admin)

## 5. How to Run
### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Optional frontend environment file:
```bash
# frontend/.env
VITE_API_URL=http://localhost:5000/api
```
