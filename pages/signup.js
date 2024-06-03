import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import MainHeader from '../components/mainheader';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '', // Changed from fullName to name
    email: '',
    password: '',
    username: '',
    age: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = 'Full Name is required'; // Changed from fullName to name
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.age) formErrors.age = 'Age is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/user-dashboard');
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message);
        if (response.status === 409) {
          setErrors({ username: 'Username already exists. Please choose a different one.' });
        } else {
          setErrors({ general: 'Error registering user. Please try again.' });
        }
      }
    }
  };

  return (
    <>
      <Head>
        {/* Meta tags */}
      </Head>
      <MainHeader pageHeading="Welcome to Athlotic Sportswear! Please sign up." />
      <div className="w-[40%] mx-auto my-20">
        <div className="signup-title py-8 sm:px-6 flex sm:flex-row flex-col items-center justify-between">
          <h3 className="text-center lg:text-3xl sm:text-2xl text-xl mb-4 font-semibold">
            Sign Up
          </h3>
          <div className="signup-other float-right text-gray-600">
            <span>
              Already a member?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>{' '}
              here.
            </span>
          </div>
        </div>
        <div className="mx-auto bg-white sm:p-6 p-3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Please enter your full name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.name}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Please enter your email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-sm text-gray-600 mb-1">
                    Password
                  </label>
                  <div className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 flex justify-between">
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Please enter your password"
                      className="w-full placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {errors.password && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.password}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-sm text-gray-600 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Please enter your username"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.username && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.username}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="age" className="text-sm text-gray-600 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Please enter your age"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.age && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.age}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="gender" className="text-sm text-gray-600 mb-1">
                    Gender
                  </label>
                  <input
                    type="text"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    placeholder="Please enter your gender"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.gender && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">{errors.gender}</span>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 btn-action rounded-full text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  SIGN UP
                </button>
                {errors.general && (
                  <div className="text-red-500 mt-2 text-sm text-center">{errors.general}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;

