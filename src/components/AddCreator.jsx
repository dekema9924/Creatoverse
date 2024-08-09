import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../Client'

function AddCreator() {
    const navigate = useNavigate();
    const [isInput, setInputs] = useState({
        name: "",
        description: "",
        imageURL: "",
        contentType: "",
        contentLink: ""
    })



    const HandleInput =(e)=>{
       setInputs({...isInput,[e.target.name]: e.target.value})
    }
    const HandleSubmit =async (e)=>{
        e.preventDefault();

        //insert form data to supabase
        const {data, error} = await supabase
        .from("Creators")
        .insert({name: isInput.name, description: isInput.description, imageUrl: isInput.imageURL, contentType:isInput.contentType, url:isInput.contentLink})
        
      
            navigate('/viewcreators');

        
        
    }

    return (
        <>
            <form  onSubmit={HandleSubmit} action="" className='border-2 bg-lime-400 border-red-700 flex flex-col justify-center items-center h-screen'>
                <h1 className='text-3xl text-black capitalize italic font-bold'>Add Creator</h1>

                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Name</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' type="text" name='name' placeholder='MrBeast ' />
                </div>
                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Description</label>
                    <input onChange={HandleInput}  className='border-2 pl-3 w-60' type="text" name='description' placeholder='A multi million youtuber... ' />
                </div>

                <div className='flex flex-col p-3'>
                    <label htmlFor="name">ImageUrl</label>
                    <input onChange={HandleInput} className='border-2 pl-3 w-60' type="text" name='imageURL' placeholder='https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' />
                </div>
                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Content Type</label>
                    <input onChange={HandleInput}  className='border-2 pl-3 w-60' type="text" name='contentType' placeholder='Youtube' />
                </div>
                <div className='flex flex-col p-3'>
                    <label htmlFor="name">Content Link</label>
                    <input onChange={HandleInput}  className='border-2 pl-3 w-60' type="text" name='contentLink' placeholder='https://youtube/mrbeats...' />
                </div>
                
                

                <div className='flex gap-5'>
                    <button type='submit' className='border-2 border-blue-900 text-white w-40 h-10 bg-blue-500'>Submit</button>
                    <Link to={'/'}>
                        <button className='border-2 bg-red-500 border-red-900 w-40 h-10'>Cancel</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default AddCreator