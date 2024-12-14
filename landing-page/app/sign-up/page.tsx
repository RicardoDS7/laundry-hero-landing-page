'use client';
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    console.log("Form Data:", { ...data, captchaToken });
    reset();
    setCaptchaToken(null); // Reset CAPTCHA
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.name ? "border-red-500" : ""
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.email ? "border-red-500" : ""
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.password ? "border-red-500" : ""
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* reCAPTCHA */}
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6LeAhpsqAAAAAKaYgnj4YdzWyAQwRiWjX-WozirH" // Replace with your actual site key
            onChange={onCaptchaChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
