"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import { redirect } from 'next/navigation'
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [cred, setCred] = useState({
    name: "",
    password: "",
    email: "",
    location: "",
  });

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://food-delivery-api-ivory.vercel.app/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cred.name,
          password: cred.password,
          email: cred.email,
          location: cred.location,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert("Please enter your correct credentials");
    }

    if (data.success) {
      alert("user register successful!");
      router.push("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex mt-[6rem]">
        <div>
          <h1></h1>
        </div>
        <form method="POST" className="max-w-sm mx-auto mt-5">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-none dark:focus:border-none"
              required
              value={cred.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-none dark:focus:border-none"
              placeholder="eg: name@gmail.com"
              required
              value={cred.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              value={cred.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-none dark:focus:border-none"
              required
              autoComplete="off"
              onChange={onChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-none focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-none dark:focus:border-none"
              required
              value={cred.location}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-[#dd610f] hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#dd610f] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button className="ml-4 text-white bg-[#dd610f] hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#dd610f] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link href="/login">Already a user?</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
