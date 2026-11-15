"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";

const SinIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // MONGODB DATA PASS
    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
    console.log(resData, error);
  };

  //SINGIN GOOGLE,
  const handelClick = async () => {
    const singInData = await signIn.social({
      provider: "google",
    });
  };

  //SINGIN GITHUB
  const handelGit = async () => {
    const githubData = await signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen bg-[#F1F6F1] px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#26352B]">সাইন ইন</h2>

        <p className="text-sm text-gray-500 mt-2">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Register Form */}
      <div className="max-w-md mx-auto bg-[#FAFCFA] border border-[#E1EAE1] rounded-2xl p-5 sm:p-6">
        <form onSubmit={onSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ইমেইল
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full bg-transparent border-[#DFE8DF] rounded-lg h-11 text-sm"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              পাসওয়ার্ড
            </label>

            <input
              type="password"
              name="password"
              placeholder="আবার লিখুন"
              minLength={8}
              className="input input-bordered w-full bg-transparent border-[#DFE8DF] rounded-lg h-11 text-sm"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn w-full bg-green-700 hover:bg-green-800 text-white border-none rounded-lg h-11 min-h-11 text-sm font-semibold"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-sm text-gray-500">অথবা</span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-1 sm:grid-cols-1J gap-2">
          <button
            onClick={handelClick}
            type="button"
            className="btn btn-outline border-[#DFE8DF] bg-transparent text-gray-700 hover:bg-gray-100 rounded-lg text-xs sm:text-sm"
          >
            <FcGoogle />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            onClick={handelGit}
            type="button"
            className="btn btn-outline border-[#DFE8DF] bg-transparent text-gray-700 hover:bg-gray-100 rounded-lg text-xs sm:text-sm"
          >
            <VscGithubInverted />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-5">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/singup"
            className="text-green-700 font-semibold hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-5">
        <Link href="/" className="text-sm text-gray-400 hover:text-green-700">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SinIn;
