import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/register', form);
    setMsg('Account created successfully. Please login.');
    setTimeout(() => navigate('/login'), 900);
  };

  return (
    <form className="mx-auto max-w-md rounded-xl bg-white p-6 shadow" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold text-primary">Register</h2>
      {msg && <p className="mt-2 rounded bg-green-100 p-2 text-sm text-green-700">{msg}</p>}
      <input className="mt-4 w-full rounded border p-2" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
      <input className="mt-3 w-full rounded border p-2" placeholder="Email" type="email" onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input className="mt-3 w-full rounded border p-2" placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
      <button className="mt-4 w-full rounded bg-accent px-4 py-2 font-semibold text-slate-900">Create Account</button>
      <p className="mt-2 text-sm">Already registered? <Link className="text-primary" to="/login">Login</Link></p>
    </form>
  );
}
