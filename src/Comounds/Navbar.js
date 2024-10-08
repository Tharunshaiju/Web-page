import React, { useEffect, useState } from 'react'
import Nlogo from '../Assets/NIcon.png'

import { FaXmark,FaBars } from "react-icons/fa6";

const Navbar = () => {

    const [IsSticky,setIsSticky] = useState(false);
    const [IsMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu =() =>{
        setIsMenuOpen(!IsMenuOpen)
    }

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
            
        };
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.addEventListener('scroll',handleScroll);
        }
    }) 



  return (
    <header className='w-full bg-white md: bg-transparent fixed top-0 left-0 right-0'>
        <nav className={'py-4 lg:px-12 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-neutralSilver duration-300 :""}'}>
            <div className=' flex justify-between items-center'> 
                <a className='flex font-semibold text-2xl items-center mx-3' href=''><img src={Nlogo} className='w-10 inline-block items-center' />NEXCENT</a>
                <ul className='md:flex hidden space-x-12'>
                    <li>
                        <a href='home'>Home</a>
                        <a className='pl-5'href='Services'>Service</a>
                        <a className='pl-5'href='About'>About</a>
                        <a className='pl-5'href='Product'>Product</a>
                        <a className='pl-5'href='#'>Testimonial</a>
                        <a className='pl-5'href='faq'>FAQ</a>
                    </li>
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href='#' className='hidden lg:flex items-center text-brandPrimary'>Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign In</button>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-neutrslDGrey focus:outline-none focus:text-gray-500'>
                        
                        {
                            IsMenuOpen ? (<FaXmark className='w-6 h-6 text-neutralDGery' />) : (<FaBars className='w-6 h-6 text-neutralDGery' />)
                        }

                    </button>
                </div>
            </div>
            <div className={'absolute lg:hidden mt-[65px] top-0 right-0 left-0'}>
            { IsMenuOpen && <ul  className='bg-neutralSilver inline-block px-10 py-2'>
                    <li onClick={()=>setIsMenuOpen(!IsMenuOpen)} className=''>
                        <a href='#'>Home</a>
                        <a className='flex pt-2'href='services'>Service</a>
                        <a className='flex pt-2'href='About'>About</a>
                        <a className='flex pt-2'href='Product'>Product</a>
                        <a className='flex pt-2'href='#'>Testimonial</a>
                        <a className='flex pt-2'href='faq'>FAQ</a>
                    </li>
            </ul>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
