import React, { useState } from 'react'
import axiosFetch from '../axios/axiosFetch'

const Form = () => {

    const [title, setTitle] = useState('')
    const [image_url, setImage_url] = useState('')
    const [year, setYear] = useState(0)
    const [IMDb_rating, setIMDb_rating] = useState(0)
    const [budget, setBudget] = useState(0)

   const createData = async (e) => {

    e.preventDefault()
  
    const newMovie = {
        title,
        image_url,
        year,
        IMDb_rating,
        budget
    }

    const res = await axiosFetch.post('movie', newMovie)

    console.log(res)

    if(res.status === 201){
        alert('Movie is created')

        setTitle('')
        setYear(0)
        setImage_url('')
        setIMDb_rating('')
        setBudget(0)
    }

    console.log(newMovie)
   }



  return (
    <div className=''>
        <div className="container px-4 mx-auto h-full">
            <div className='flex justify-center items-center h-full'>
                <form onSubmit={createData} className='w-[500px] p-5 border rounded-md' action="">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-3 border-none bg-slate-200 rounded-md shadow-md mb-3 hover:bg-slate-100' type="text" placeholder='Enter movie Title' />
                    <input value={image_url} onChange={(e) => setImage_url(e.target.value)} className='w-full p-3 border-none bg-slate-200 rounded-md shadow-md mb-3 hover:bg-slate-100' type="text" placeholder='Enter movie image URL' />
                    <input value={year} onChange={(e) => setYear(e.target.value)} className='w-full p-3 border-none bg-slate-200 rounded-md shadow-md mb-3 hover:bg-slate-100' type="number" placeholder='Enter movie Year' />
                    <input value={IMDb_rating} onChange={(e) => setIMDb_rating(e.target.value)} className='w-full p-3 border-none bg-slate-200 rounded-md shadow-md mb-3 hover:bg-slate-100' type="text" placeholder='Enter movie IMDb rating' />
                    <input value={budget} onChange={(e) => setBudget(e.target.value)} className='w-full p-3 border-none bg-slate-200 rounded-md shadow-md mb-3 hover:bg-slate-100' type="number" placeholder='Enter movie Budget' />
                    <div className='flex justify-end'>
                    <button type='submit' className='py-3 px-10 bg-green-500 text-white rounded-md'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form