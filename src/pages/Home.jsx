import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosFetch from '../axios/axiosFetch'
import { useNavigate } from 'react-router-dom'
import EditModal from '../components/EditModal'



const Home = () => {

    const [showModal, setShowModal] = useState(false)

    const [movie, setMovie] = useState({})

    const navigate = useNavigate()

    const [data, setData ] = useState([])


    const editBtn  = (d) => {
        setShowModal(true)
        setMovie(d)
    }

    console.log(movie)
    const getData = async () => {
    //    axios bilan get qilish

    const res = await axiosFetch.get('movie')

    setData(res.data)

    }

    useEffect(() => {
        getData()
    }, [])
    

    console.log(data)

    const deleteData = async (id) => {
        const res = await axiosFetch.delete(`movie/${id}`)
        

        if(res.status === 200){
            alert('Movie deleted')
            getData()
        }
    }

 

  return (
    <div>
        <div className="container px-4 mx-auto">
            <div className='grid grid-cols-3 gap-10'>
                {
                    data?.map((d) => (
                        <div className='relative group'>
                            <img className='w-full h-[550px]' src={d.image_url} alt="" />
                            <h1><span className='font-bold'>Movie name :</span>  {d.title}</h1>
                            <div className='group-hover:block hidden ease-in-out transition absolute top-0 left-0 w-full h-full bg-black bg-opacity-55 py-20'>
                                <div className='h-full w-full flex justify-evenly items-end'>
                                    <button onClick={() => deleteData(d.id)} className='bg-red-400 w-40 py-4 text-white'>Delete</button>
                                    <button onClick={() => editBtn(d)} className='bg-green-400 w-40 py-4 text-white'>Edit</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        {
            showModal && <EditModal setShowModal={setShowModal} movie={movie} getData={getData}/>
        }
      
    </div>
  )
}

export default Home