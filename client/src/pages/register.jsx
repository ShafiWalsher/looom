import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log('Registered with:', formData);
      alert('Registration logic would go here.');
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center w-full animate-fade-in">
      <h1 className="font-bold text-[16px] mb-4 text-center">
        Create an account with Looom
      </h1>

      <form onSubmit={handleRegister} className="w-full space-y-2">

        <Input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full h-14 px-4 py-4 rounded-lg focus-visible:ring-0 focus:border-black/40 transition-colors duration-200"
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full h-14 px-4 py-4 rounded-lg focus-visible:ring-0 focus:border-black/40 transition-colors duration-200"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full h-14 px-4 py-4 rounded-lg focus-visible:ring-0 focus:border-black/40 transition-colors duration-200"
        />

        <div className="pt-2">
          <Button type="submit" disabled={loading} className="w-full h-14 px-4 py-4 rounded-lg bg-black/80 text-gray-400 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
            {loading ? 'Creating account...' : 'Sign up'}
          </Button>
        </div>
      </form>

      <div className="w-full flex items-center justify-center my-6">
        <div className="h-px bg-gray-700 grow"></div>
        <span className="px-4 text-gray-700 text-sm">or</span>
        <div className="h-px bg-gray-700 grow"></div>
      </div>

      <div className="w-full text-center">
        <p className="text-gray-500 text-sm mb-2">Already have an account?</p>
        <Link to="/login" className="w-full block">
          <Button variant="secondary" type="button" className="w-full h-14 px-4 py-4 rounded-lg border border-black/40 bg-white hover:bg-white hover:border-black/60 cursor-pointer">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Register;