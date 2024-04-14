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
    <div>
      cancel
    </div>
  )
}

export default page
