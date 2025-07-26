import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container px-4 mx-auto">
            <nav className='flex justify-between items-center'>
                <img src="https://img.icons8.com/arcade/64/mac-os.png" alt="" />
                <ul className='flex gap-10 text-xl font-bold'>
                    <li className='hover:scale-125 ease-in-out'>
                        <Link to={'/'} >
                          Home
                        </Link>
                    </li>
                    <li className='hover:scale-125 ease-in-out'>
                        <Link to={'/form'} >
                           Form
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar