import React, { useEffect } from 'react'
import { FcDeleteDatabase } from 'react-icons/fc';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice'
import toast, { Toaster } from 'react-hot-toast';

function CardItem({ item, itemIndex }) {

    const dispatch = useDispatch();
    function removefromcart() {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
            <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
                <div className='w-[30%]'>
                    <img src={item.image} className='object-cover' />
                </div>
                <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
                    <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
                    <h1 className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0, 10).join(" ")}</h1>
                    <div className='flex items-center justify-between'>
                        <p className='font-bold text-lg text-green-600'>{item.price}</p>
                        <div className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3' onClick={removefromcart}>
                            {/* <FcDeleteDatabase /> */}
                            <MdDelete />
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
export default CardItem;
