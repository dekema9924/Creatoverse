import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className=" h-screen w-screen bg-no-repeat bg-[url('https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
                <div className='flex flex-col  h-full items-center justify-center gap-5  '>
                    <Link to={'/viewcreators'}>
                        <button className='px-8 py-2 rounded-md bg-yellow-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500'>Show creators</button>
                    </Link>
                    <Link to={'/addcreator'}>
                        <button className='px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500'>Add Creator</button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default Home
