import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/auth/login', form);
      login(data.token, data.user);
      navigate(`/${data.user.role}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form className="mx-auto max-w-md rounded-xl bg-white p-6 shadow" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold text-primary">Login</h2>
      {error && <p className="mt-2 rounded bg-red-100 p-2 text-sm text-red-700">{error}</p>}
      <input className="mt-4 w-full rounded border p-2" placeholder="Email" type="email" onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input className="mt-3 w-full rounded border p-2" placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
      <button className="mt-4 w-full rounded bg-primary px-4 py-2 text-white">Sign In</button>
    </form>
  );
}
