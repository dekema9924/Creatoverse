

import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { supabase } from '../Client';


export default function ViewCreator() {
    const { id } = useParams()
    const [isCreator, setCreator] = useState();

    useEffect(() => {
        getSingleCreator()
    }, [])


    const getSingleCreator = async () => {
        const { data, err } = await supabase
            .from("Creators")
            .select()
            .eq('id', id)
        setCreator(data[0])



    }





    return (
        <>
            <div className='bg-lime-400 h-screen w-screen p-5'>
                <Link className='' to={'/viewcreators'}>
                    <button className='border-2 bg-blue-300 rounded-md w-36  m-4 text-center'>
                        <ArrowBackIcon />
                        GoBack
                    </button>
                </Link>
                {
                    isCreator && (
                        <>
                            <div className='border-2 mt-5 bg-white w-8/12 p-5 border-red-900 m-auto flex flex-col gap-3'>
                                <img className='object-cover w-[20%] h-[10%]' src={isCreator.imageUrl} alt="" />
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='capitalize font-bold text-2xl'>{isCreator.name}</h1>
                                        <p className=' w-fit bg-red-500  text-white rounded-lg px-3 capitalize'>{isCreator.contentType}</p>
                                    </div>
                                    <div className='flex justify-between text-lg font-bold'>
                                        <Link className='text-teal-900 bg-teal-500 w-16 text-center rounded-md' to={`/EditCreator/${id}`}>Edit</Link>
                                    </div>
                                </div>
                                <p className='font-thin text-2xl'>{isCreator.description}</p>
                                <a className=' bg-blue-500 py-2 rounded-lg text-center' target='blank' href="http://">Visit Channel</a>

                            </div>
                        </>
                    )
                }


            </div>
        </>
    )
}
