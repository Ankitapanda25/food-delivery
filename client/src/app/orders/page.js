"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'

const orders = () => {
    const [orderData, setorderData] = useState({})

    useEffect(() => {
        console.log(orderData)

    },[orderData])
    
    const fetchMyOrder = async () => {
        // console.log('hello')
        // console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:4000/api/myorderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            setorderData(response)
            // console.log("response is", response)
        })
    }

        useEffect(() => {
            fetchMyOrder()
            
            
        }, [])


        return (
           
            <div>
                <div>
                <Navbar />

                </div>
            

            <div className='p-[10rem]'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div className=''>
                                                    {arrayData.Order_date ? <div className='m-auto mt-5 font-bold'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                                <div className="card-body flex space-x-6">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    {/* <h5 className=''>{arrayData.Order_time }</h5> */}
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.quantity}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        {/* <span className='m-1'>{data}</span> */}
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            
        </div>
        )
    
}
export default orders
