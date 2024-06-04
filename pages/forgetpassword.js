import React, { useState } from "react";
import Head from "next/head";
import MainHeader from "../components/mainheader";
import Link from "next/link";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ username: "", security_answer: "", new_password: "" });
  const [errors, setErrors] = useState({ username: "", security_answer: "", new_password: "" });

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.username) {
      formIsValid = false;
      errors.username = "Username is required";
    }

    if (!formData.security_answer) {
      formIsValid = false;
      errors.security_answer = "Security answer is required";
    }

    if (step === 2 && !formData.new_password) {
      formIsValid = false;
      errors.new_password = "New password is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (step === 1) {
        // First step: verify username and security answer
        console.log("Verifying username and security answer:", formData);
        try {
          const response = await fetch("/api/forget", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: formData.username, security_answer: formData.security_answer, new_password: "" }),
          });

          const data = await response.json();
          if (data.success) {
            setStep(2);
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while verifying the security answer");
        }
      } else {
        // Second step: update password
        console.log("Updating password:", formData);
        try {
          const response = await fetch("/api/forget", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          const data = await response.json();
          if (data.success) {
            alert("Password updated successfully");
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while updating the password");
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>Forget Password</title>
      </Head>
      <MainHeader pageHeading="FORGET PASSWORD" pageImg="Forget Password" />

      <div className="w-[70%] mx-auto my-20">
        <div className="w-full lg:w-1/2 bg-white mx-auto sm:p-5">
          <div className="px-8 mb-4 text-center">
            <h3 className="pt-4 mb-2 sm:text-2xl text-xl">Forgot Your Password?</h3>
            <p className="mb-4 mt-5 sm:text-sm text-xs text-gray-700">
              {step === 1
                ? "Enter your username and the answer to the security question below."
                : "Enter your new password."}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            {step === 1 && (
              <>
                <div className="flex flex-col mb-5">
                  <label htmlFor="username" className="text-sm font-bold text-gray-700 mb-1">Enter your USERNAME</label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Please enter your username"
                    className={`w-full border ${errors.username ? "border-red-500" : "border-gray-300"} rounded-md px-3 py-2 sm:text-base text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500`}
                  />
                  {errors.username && <div className="flex items-center justify-end mt-1"><span className="text-red-500 text-xs">{errors.username}</span></div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="security_answer" className="block mb-2 text-sm font-bold text-gray-700">What was your Childhood Nickname?</label>
                  <input
                    className={`w-full mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.security_answer ? "border-red-500" : "border-gray-300"} rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                    id="security_answer"
                    type="text"
                    value={formData.security_answer}
                    onChange={handleInputChange}
                    placeholder="Enter Your Childhood Name"
                  />
                  {errors.security_answer && <div className="flex items-center justify-end mt-1"><span className="text-red-500 text-xs">{errors.security_answer}</span></div>}
                </div>
              </>
            )}
            {step === 2 && (
              <div className="mb-4">
                <label htmlFor="new_password" className="block mb-2 text-sm font-bold text-gray-700">Enter New Password</label>
                <input
                  className={`w-full mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.new_password ? "border-red-500" : "border-gray-300"} rounded appearance-none focus:outline-none placeholder-gray-400 focus:border-blue-500`}
                  id="new_password"
                  type="password"
                  value={formData.new_password}
                  onChange={handleInputChange}
                  placeholder="Enter Your New Password"
                />
                {errors.new_password && <div className="flex items-center justify-end mt-1"><span className="text-red-500 text-xs">{errors.new_password}</span></div>}
              </div>
            )}
            <div className="mb-6 text-center">
              <button className="w-full px-4 py-2 font-bold text-white focus:outline-none focus:shadow-outline btn-action" type="submit">
                {step === 1 ? "Verify Security Answer" : "Update Password"}
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link href="/signup" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">Create an Account!</Link>
            </div>
            <div className="text-center">
              <Link href="/login" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">Already have an account? <strong>Login!</strong></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
