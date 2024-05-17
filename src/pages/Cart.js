// import { Button } from '@mui/material';
import CardItem from '../components/CardItem';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Cart() {

    const { cart } = useSelector((state) => state);
    console.log("first", cart)
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])
    return (
        <div className=''>
            {
                cart.length > 0 ? (
                    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
                        <div style={{ paddingTop: "4.5rem" }}>
                            {
                                cart.map((item, index) => {
                                    return <CardItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>
                        <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>
                            <div className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>
                                <div className='flex flex-col gap-5'>
                                    <div className='font-semibold text-xl text-green-800  '>
                                        Your Cart
                                    </div>

                                    <div className='font-semibold text-5xl text-green-700  -mt-5'>
                                        Summary
                                    </div>
                                    <p className='text-xl'>
                                        <span className='text-gray-700 font-semibold text-xl'>Total Items: {cart.length}</span>
                                    </p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-xl font-bold'>Total Amount : {totalAmount}</p>
                                    <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition
                                     duration-300 ease-linear mt-5 border-2 border-green-600 font-bold
                                      hover:text-green-700 p-3 text-xl'>Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    : <div className='flex w-full flex-col justify-center items-center bg-white p-5 rounded-lg shadow-md h-96 text-center'>
                        <h1>Cart is Empty</h1>
                        <Link className='pt-6' to='/'>
                            <button className='bg-green-600 hover:bg-white hover:text-green-700 text-white font-bold py-3
                             px-6 rounded-full text-lg w-full hover:border-2 border-green-600 border
                              border-transparent transition duration-300 '>Shop Now</button>
                        </Link>
                    </div>
            }
        </div>
    )
}
export default Cart
