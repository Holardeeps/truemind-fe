"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type AuthFormProps = {
  authType: "signIn" | "signUp";
};

const AuthForm = ({ authType }: AuthFormProps) => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formSubmit = () => {
    // store data
    // validate
  };

  return (
    <div className="md:w-116 p-2.5 text-black">
      {/* Auth Form Header */}
      <div className="flex flex-col items-center justify-center mb-6">
        <Image
          src={"/images/ChuksKitchen.png"}
          alt="Chuks Kitchen Logo"
          height={41}
          width={183}
          className="hover:scale-y-105 mb-5"
        />
        <h2 className="font-medium capitalize text-2xl text-center">
          {authType === "signUp"
            ? "create your account"
            : "login into your account"}
        </h2>
      </div>

      {/* Form container */}
      <form action="w-full ">
        <label
          htmlFor="email-address"
          className="capitalize text-form text-sm font-medium"
        >
          email
        </label>

        <div className="border border-stroke rounded-sm py-1 px-4 w-full h-13.5 gap-3 flex items-center justify-center transition-all duration-300 ease-in-out focus-within:ring-2 mt-3 hover:mt-2 focus-within:ring-primary-blue mb-4">
          <img src="/icons/mail.svg" alt="" className="w-5 h-5" />
          <input
            id="email-address"
            type="email"
            className="flex-1 w-full outline-none"
            placeholder="name@gmail.com"
            required
          />
        </div>

        {authType === "signUp" && (
          <>
            <label
              htmlFor="phone-number"
              className="capitalize text-form text-sm font-medium"
            >
              phone number
            </label>

            <div className="border border-stroke rounded-sm py-1 px-4 w-full h-13.5 gap-3 flex items-center justify-center transition-all duration-300 ease-in-out focus-within:ring-2 mt-3 hover:mt-2 focus-within:ring-primary-blue mb-4">
              <img src="/icons/phone.png" alt="" className="w-5 h-5" />
              <input
                id="phone-number"
                type="tel"
                className="flex-1 w-full outline-none"
                placeholder="Phone number"
                required
              />
            </div>
          </>
        )}

        <label
          htmlFor="password"
          className="capitalize text-form text-sm font-medium"
        >
          password
        </label>

        <div
          className={`border border-stroke rounded-sm py-1 px-4 w-full h-13.5 gap-3 flex items-center justify-center transition-all duration-300 ease-in-out focus-within:ring-2 mt-3 hover:mt-2 focus-within:ring-primary-blue mb-4 ${authType === "signUp" && password !== confirmPassword ? "focus-within:ring-red-500" : ""}`}
        >
          <img src="/icons/lock.png" alt="" className="w-5 h-5" />
          <input
            id="password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 w-full outline-none"
            placeholder="Password"
            required
          />
          {show ? (
            <img
              src="/icons/hide.png"
              alt=""
              role="button"
              tabIndex={0}
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            />
          ) : (
            <img
              src="/icons/eye.png"
              alt=""
              role="button"
              tabIndex={0}
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>

        {authType === "signUp" && (
          <>
            <label
              htmlFor="confirm-password"
              className="capitalize text-form text-sm font-medium"
            >
              confirm password
            </label>

            <div
              className={`border border-stroke rounded-sm py-1 px-4 w-full h-13.5 gap-3 flex items-center justify-center transition-all duration-300 ease-in-out focus-within:ring-2 mt-3 hover:mt-2 focus-within:ring-primary-blue mb-2 ${authType === "signUp" && password !== confirmPassword ? "focus-within:ring-red-500" : ""}`}
            >
              <img src="/icons/lock.png" alt="" className="w-5 h-5" />
              <input
                id="confirm-password"
                type={show ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 w-full outline-none"
                placeholder="Password"
                required
              />
              {show ? (
                <img
                  src="/icons/hide.png"
                  alt=""
                  role="button"
                  tabIndex={0}
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <img
                  src="/icons/eye.png"
                  alt=""
                  role="button"
                  tabIndex={0}
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>
          </>
        )}
      </form>
      <div className="text-sm font-medium text-[#616161] tracking-tighter flex items-center gap-3 mb-4">
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
        <p className="">
          I agree to the{" "}
          <span className="text-primary-blue">Terms & Conditions</span> and{" "}
          <span className="text-primary-blue">Privacy Policy</span>
        </p>
      </div>

      <Link href={``} className="w-full">
        <Button className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#f16d0f] border-[#FF7A18] border-2 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out">
          Continue
        </Button>
      </Link>

      <Link href={``}>
        <Button className="px-8 py-3.75 w-full h-13.5 bg-[#F3F4F6] text-details text-[12px] hover:bg-soft-gray hover:text-[#FF7A18] rounded-lg cursor-pointer">
          Or continue with
        </Button>
      </Link>

      <div className="space-y-6">
        <Button className="px-8 py-3.75 w-full h-13.5 bg-white text-form/800 text-[12px] border border-text-stroke hover:bg-white rounded-lg cursor-pointer">
          <img src="/icons/google.png" alt="" className="mr-3" />
          Continue with Google
        </Button>
        <Button className="px-8 py-3.75 w-full h-13.5 bg-white text-form/800 text-[12px] border border-text-stroke hover:bg-white rounded-lg cursor-pointer">
          <img src="/icons/facebook.png" alt="" className="mr-3" />
          Continue with Facebook
        </Button>
      </div>

      <p className="text-[12px] text-center mt-3">
        {true ? "Don't have an account?" : "Already have an account?"}{" "}
        <span className="text-primary-blue pl-1">
          {authType === "signUp" ? "Sign in" : "Create an account"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
