import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>

                <Link to={'/'}><img src={assets.logo} className='mb-5 w-32 ' onClick={()=>window.scrollTo({top:0 , left:0 , behavior:'smooth'})} alt=''/></Link>
                <p className='w-full md:w-2/3 text-gray-600'>
                random shit
                </p>

            </div>

            <div>
                <p className='text-xl font-medium mb-5'>HERITAGE HUB</p>
                <ul className='flex flex-col gap-1 text-gray-600'>

                    <Link to={'/'}><li onClick={()=>window.scrollTo({top:0 , left:0 , behavior:'smooth'})}>Home</li></Link>
                    <Link to={'/about'}><li>About Us</li></Link>
                    <Link to={'/orders'}><li>Orders</li></Link>
                    <Link to={'/'}><li>Privacy Policy</li></Link>

                </ul>
            </div>

            <div>

                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>

                    <li>+91-94369990 , +1-004-004-444</li>
                    <li>conatact@heritagehub.com</li>
                    <Link to='https://www.youtube.com/channel/UCST4JnGUuYB0gbf2ogISFAA' target='_blank'><li>Youtube</li></Link>
                    <Link to='https://www.instagram.com/heritage.hub2025' target='_blank'><li>Instagram</li></Link>

                </ul>

            </div>

        </div>

        <div>

            <hr/>

            <p className='py-5 text-sm text-center'>
            Copyright 2024@ HeritageHub.com - All Right Reserved.
            </p>

        </div>
      
    </div>
  )
}

export default Footer
