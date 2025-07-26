import React, { useEffect, useState } from 'react'
import axiosFetch from '../axios/axiosFetch'

const EditModal = ({setShowModal, movie, getData}) => {

      const [title, setTitle] = useState('')
        const [image_url, setImage_url] = useState('')
        const [year, setYear] = useState(0)
        const [IMDb_rating, setIMDb_rating] = useState(0)
        const [budget, setBudget] = useState(0)

        useEffect(() => {
            if (movie) {
                setTitle(movie.title)
                setImage_url(movie.image_url)
                setYear(movie.year)
                setIMDb_rating(movie.IMDb_rating)
                setBudget(movie.budget)
            }
        }, [])


   const createData = async (e) => {

    e.preventDefault()
  
    const newMovie = {
        title,
        image_url,
        year,
        IMDb_rating,
        budget
    }

    const res = await axiosFetch.put(`movie/${movie.id}`, newMovie)

    console.log(res)

    if(res.status === 200){
        alert('Movie is created')

        setTitle('')
        setYear(0)
        setImage_url('')
        setIMDb_rating('')
        setBudget(0)
        setShowModal(false)
        getData()
    }
    console.log(newMovie)
   }
    return (
        <div className='w-full h-full fixed top-0 bg-black bg-opacity-55'>
            <img onClick={() => setShowModal(false)} className='absolute right-40 top-20 hover:scale-125 w-16' src="https://img.icons8.com/material-outlined/24/FA5252/multiply--v1.png" alt="" />
            <div className='w-full h-full flex justify-center items-center'>
                <form onSubmit={createData}  className='w-[500px] p-5 border rounded-md' action="">
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
    )
}

export default EditModal