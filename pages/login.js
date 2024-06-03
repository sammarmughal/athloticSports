import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Head from 'next/head';
import MainHeader from '../components/mainheader';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    loginInput: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.loginInput) formErrors.loginInput = 'Email/Username is required';
    if (!formData.password) formErrors.password = 'Password is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          title: 'Login Successful',
          text: 'You will be redirected shortly',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            if (data.role === 'user') {
              router.push('/user-dashboard');
            } else if (data.role === 'admin') {
              router.push('/admin-portal');
            }
          },
        });
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: 'Please check your credentials and try again',
          icon: 'error',
        });
        console.error('Login failed');
      }
    }
  };


  return (
    <>
      <Head>
        {/* Meta tags */}
      </Head>
      <MainHeader pageHeading="Welcome to Athlotic Sportswear! Please login." />
      <div className="sm:w-[40%] w-[90%] mx-auto my-20">
        <div className="login-title py-8 sm:px-6 flex sm:flex-row flex-col items-center justify-between">
          <h3 className="text-center lg:text-3xl sm:text-2xl text-xl mb-4 font-semibold">
            Login
          </h3>
          <div className="login-other float-right text-gray-600">
            <span>
              New member?{' '}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Register
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
                  <label
                    htmlFor="loginInput"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Email/Username
                  </label>
                  <input
                    type="text"
                    id="loginInput"
                    value={formData.loginInput}
                    onChange={handleInputChange}
                    placeholder="Please enter your Email or Username"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  {errors.loginInput && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.loginInput}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Password
                  </label>
                  <div className="w-full border border-gray-300 rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 flex justify-between">
                    <input
                      type={show ? 'text' : 'password'}
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Please Enter Your Password"
                      className="w-full placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="block"
                      onClick={() => setShow(!show)}
                    >
                     {show ? (
                        <div>
                          <i className="fas fa-eye text-lg"></i>
                        </div>
                      ) : (
                        <div>
                          <i className="fas fa-eye-slash text-lg"></i>
                        </div>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-red-500 text-xs">
                        {errors.password}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-right mt-2">
                  <Link href="/forgetpassword">
                    <p className="text-xs text-blue-600">Reset Your Password</p>
                  </Link>
                </div>
                <div></div>
                <button
                  type="submit"
                  className="w-full py-3 btn-action rounded-full text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
