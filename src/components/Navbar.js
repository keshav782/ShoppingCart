import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {

    const { cart } = useSelector((state) => state)
    return (
        <nav>
            <div className='flex  justify-between items-center h-20 max-w-6xl mx-auto'>
                <Link to="/">
                    <div className='ml-5'>
                        <img src='https://codehelp-shopping-cart.netlify.app/logo.png' className='h-14' />
                    </div>
                </Link>
                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                    <Link to="/">
                        <p>Home </p>
                    </Link>
                    <Link to='/cart'>
                        <div className='relative'>
                            <FaShoppingCart className='text-2xl' />
                            {
                                cart.length > 0 && <span className='absolute -top-1 -right-2 text-xs w-5 h-5 rounded-full bg-green-600 text-white flex justify-center items-center animate-bounce'>{cart.length}</span>
                            }

                        </div>
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;