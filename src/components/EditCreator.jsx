
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../Client'



function EditCreator() {
    const { id } = useParams()
    const navigate = useNavigate();

    const [isInput, setInputs] = useState({
        name: "",
        description: "",
        imageURL: "",
        contentType: "",
        contentLink: ""
    })

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {
        const response = await supabase
            .from('Creators')
            .select()
            .eq('id', id)

        if (response) {
            setInputs({
                name: response.data[0].name,
                description: response.data[0].description,
                imageURL: response.data[0].imageUrl,
                contentType: response.data[0].contentType,
                contentLink: response.data[0].url
            })
        }

    }


    const HandleInput = (e) => {
        setInputs({ ...isInput, [e.target.name]: e.target.value })
    }

    //edit creator
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('Creators')
            .update({ 
                name: isInput.name, description: isInput.description, imageUrl: isInput.imageURL, contentType:isInput.contentType, url:isInput.contentLink
             })
            .eq('id', id)
                navigate('/viewcreators')

         
    }


    return (
        <>
            <form onSubmit={HandleSubmit} action="" className=' flex flex-col justify-center items-center h-screen'>
                <h1 className='text-3xl text-teal-400 italic font-bold'>Update Creator</h1>

                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Name</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' type="text" name='name' placeholder='MrBeast ' value={isInput.name} />
                </div>
                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Description</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' type="text" name='description' placeholder='A multi million youtuber... ' value={isInput.description} />
                </div>

                <div className='flex flex-col p-3'>
                    <label htmlFor="name">ImageUrl</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' type="text" value={isInput.imageURL} name='imageURL' placeholder='https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' />
                </div>
                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Content Type</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' type="text" value={isInput.contentType} name='contentType' placeholder='Youtube' />
                </div>
                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Content Link</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' value={isInput.contentLink} type="text" name='contentLink' placeholder='https://youtube/mrbeats...' />
                </div>



                <div className='flex gap-5'>
                    <button type='submit' className='border-2 border-blue-900 text-white w-40 h-10 bg-blue-500'>Update</button>
                    <Link to={'/viewcreators'}>
                        <button className='border-2 bg-red-500 border-red-900 w-40 h-10'>Cancel</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default EditCreator