# GlobeTrek Adventures (Full-Stack)

Production-oriented university submission scaffold for a travel and tourism platform.

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT

## Project Structure
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

## Features Implemented
- User registration/login with JWT
- Role-based access control (customer/staff/admin)
- Public tourism pages
- Package list/detail pages with backend integration
- Customer, staff, and admin dashboard routes
- Booking API and inquiry API
- Package management API endpoint for admin
- Wishlist field in user model
- Booking status tracking in booking model
- Error/404/500 handlers

## Backend API
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/packages`
- `GET /api/packages/:id`
- `POST /api/packages` (admin)
- `POST /api/book`
- `GET /api/my-bookings`
- `POST /api/inquiry`
- `GET /api/inquiries` (staff/admin)

## Run Instructions
### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Set frontend API URL if needed:
```bash
# frontend/.env
VITE_API_URL=http://localhost:5000/api
```
