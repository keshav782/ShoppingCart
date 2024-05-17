import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Product from '../components/Product';
function Home() {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setloading] = useState(false);
    const [post, setPost] = useState([]);

    async function fetchData() {
        setloading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            // console.log(data);
            setPost(data);
            setloading(false);
        }
        catch (error) {
            console.log(error);
            setPost([]);
        }

    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {
                loading ? <ClipLoader color="#36d7b7" /> : post.length > 0 ?
                    <div className='grid py-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>{
                        post.map((post) => {
                            { }
                            return <Product key={post.id} post={post}
                            />
                        })}
                    </div>
                    : <div className='flex justify-center items-center'>
                        <p>No data found</p>
                    </div>
            }

        </div>
    )
}
export default Home
