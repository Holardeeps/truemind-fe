"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  authType: "signIn" | "signUp";
};
type FormData = {
  email: string;
  phone: string;
  password: string;
  confirmPassowrd: string;
};

const AuthForm = ({ authType }: AuthFormProps) => {
  // state to reveal and hide password fields
  const [show, setShow] = useState(false);
  // state to control formdata
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    password: "",
    confirmPassowrd: "",
  });
  // Form data error state
  const [formError, setFormError] = useState("");
  // loading state on submit
  const [loading, setLoading] = useState(false);
  // password error to check if password fields are both the same
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  // handle change function to update the formdata fields from the input elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form action to run on submitof the form
  const formSubmit = async (type: string, formData: FormData) => {
    const { email, password, confirmPassowrd, phone } = formData;

    //Check if email and password fields are not empty for both signUp and signIn
    if (!email || !password) {
      setLoading(false);
      setFormError(
        type === "sign-up"
          ? "All fields are required"
          : "Email and password are required",
      );
      return;
    }

    //  fields confirmation on type signup
    if (type === "sign-up") {
      if (!phone || !confirmPassowrd) {
        setLoading(false);
        setFormError("All fields are required");
        return;
      }

      if (password !== confirmPassowrd) {
        setLoading(false);
        setPasswordError(true);
        return;
      }
    }

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // alert(`${type === "sign-up" ? "Registered" : "Logged In"}`);
      router.push(`/explore`);
    } catch (error) {
      // alert("Something went wrong");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-116 p-2.5 text-black">
      {/* Auth Form Header */}
      <div className="flex flex-col items-center justify-center mb-6" id="home">
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
            name="email"
            id="email-address"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
                name="phone"
                id="phone-number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 w-full outline-none"
                placeholder="Phone number"
                required
              />
            </div>
          </>
        )}

        <label
          htmlFor="password"
          className={`capitalize ${authType === "signUp" && passwordError ? "text-red-500" : "text-form"} text-sm font-medium`}
        >
          password
        </label>

        <div
          className={`border border-stroke rounded-sm py-1 px-4 w-full h-13.5 gap-3 flex items-center justify-center transition-all duration-300 ease-in-out focus-within:ring-2 mt-3 hover:mt-2 focus-within:ring-primary-blue mb-4`}
        >
          <img src="/icons/lock.png" alt="" className="w-5 h-5" />
          <input
            name="password"
            id="password"
            type={show ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
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
        {authType === "signIn" && formError && (
          <span className="text-sm text-red-500 block -mt-2">{formError}</span>
        )}

        {authType === "signUp" && (
          <>
            <label
              htmlFor="confirm-password"
              className={`capitalize ${passwordError ? "text-red-500" : "text-form"} text-sm font-medium`}
            >
              confirm password
            </label>

            <div
              className={`border border-stroke rounded-sm py-1 px-4 w-full h-13.5 gap-3 flex items-center justify-center transition-all duration-300 ease-in-out focus-within:ring-2 mt-3 hover:mt-2 focus-within:ring-primary-blue mb-2 ${authType === "signUp" && formData.password !== formData.confirmPassowrd ? "focus-within:ring-red-500" : ""}`}
            >
              <img src="/icons/lock.png" alt="" className="w-5 h-5" />
              <input
                name="confirmPassowrd"
                id="confirm-password"
                type={show ? "text" : "password"}
                value={formData.confirmPassowrd}
                onChange={handleChange}
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
            {formError && (
              <span className="text-sm text-red-500 block">{formError}</span>
            )}
            {passwordError && (
              <span className="text-sm text-red-500 block">
                Passwords don't match...
              </span>
            )}
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

      <Link
        href={``}
        className="w-full"
        onClick={() =>
          formSubmit(authType === "signUp" ? "sign-up" : "sign-in", formData)
        }
      >
        <Button
          className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#f16d0f] border-[#FF7A18] border-2 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? "Processing" : "Continue"}
          {loading ? <Loader2 className="animate-spin" /> : ""}
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
        <Link
          href={authType === "signUp" ? "/sign-in" : "/sign-up"}
          className="text-primary-blue pl-1"
        >
          {authType === "signUp" ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
