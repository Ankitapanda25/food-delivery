"use client"

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/home");
          }, 2000);
        
    },[])
  return (
    <div className='flex justify-center' >
          <h1>Transaction failed</h1>
          <h1>Redirecting to the home page...</h1>
    </div>
  )
}

export default page
