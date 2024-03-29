"use client"
import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation'





const page = () => {
  const router = useRouter()
  const [cred, setCred] = useState({
        email: "",
        password: "",
        
      });
      const onChange = (e) => {
        setCred({...cred, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost:4000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: cred.password,
            email: cred.email,
            
          })
          
        })
      
      const data = await response.json();
      if (!data.success) {
        alert('enter valid credentials')
        

      }
      if (data.success) {
        localStorage.setItem('authToken', data.authToken)
        // console.log(localStorage.getItem('autoToken'));
        alert('login successful');
        router.push("/")
      }
    console.log(data);
  };
        
  return (
      <div>
          <Navbar/>
          <form method="POST" className="max-w-sm mx-auto mt-10">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg: name@gmail.com"
            required value={cred.email}
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
            id="password" value={cred.password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required autoComplete="off"
            onChange={onChange}
          />
              </div>
              <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <button className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link href="/createuser">New user</Link>
        </button>
      </form>
    </div>
  )
}

export default page
