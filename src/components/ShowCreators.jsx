
import React, { useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, } from 'react-router-dom';
import { supabase } from '../Client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function Creators() {
  const [isCreators, setCreator] = useState([])


  useEffect(() => {
    getCreators();
  }, [])

  //fetch creators from supabase
  const getCreators = async () => {
    const { data, err } = await supabase.from("Creators").select();
    setCreator(data)
  }

  //delete creator
  const HandleDelete = async (id) => {
    const response = await supabase
      .from('Creators')
      .delete()
      .eq('id', id)

    if (response) {
      const { data, err } = await supabase.from("Creators").select();
      setCreator(data)
    }
  }
  return (

    <>
      <div className='bg-lime-400 w-screen h-screen'>
        <Link to={'/'}>
          <button className='border-2 bg-blue-300 rounded-md w-36  m-4 text-center'>
            <ArrowBackIcon />
            GoBack
          </button>
        </Link>
        <div className='bg-lime-400 flex flex-wrap gap-5  p-20 '>

          {
            isCreators && (
              <>
                {
                  isCreators.map((creators) => {
                    return (
                      <>
                        <div key={creators.id} className=' bg-white p-5  h-[450px] w-96  pb-15'>
                          <div className='flex justify-between'>
                            <div className='flex gap-3 mb-2'>
                              <Link className='text-teal-900' to={`/EditCreator/${creators.id}`}><EditIcon/>Edit</Link>
                              <button onClick={() => HandleDelete(creators.id)} className='text-red-600'><DeleteIcon/>Delete</button>
                            </div>
                            <div>
                            <a target='blank' className='bg-blue-300 rounded-md w-fit px-5 text-center ' href={creators.url}>See channel</a>
                            </div>
                          </div>
                          <img className='w-96 border-2 h-40 object-cover' src={creators.imageUrl} alt="creatorimg" />
                          <div className='flex flex-col gap-3'>
                            <h1 className='w-fit font-medium text-2xl mt-2 capitalize'>{creators.name}</h1>
                            <p className='bg-red-600 text-white rounded-md w-fit px-5 text-center '>{creators.contentType}</p>
                            <p className='font-thin text-lg h-fit text-ellipsis'>{creators.description.slice(0,80)+ '...'}</p>
                            <div className='flex gap-5 items-center justify-end'>
                              <Link to={`/readmore/${creators.id}`}><ReadMoreIcon/>Readmore</Link>
                            </div>

                          </div>

                        </div>
                      </>
                    )
                  })
                }
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Creators