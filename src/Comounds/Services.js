import React from 'react'
import logo1 from '../Assets/Logo.png'
import logo2 from '../Assets/Logo (1).png'
import logo3 from '../Assets/Logo (2).png'
import logo4 from '../Assets/Logo (3).png'
import logo5 from '../Assets/Logo (4).png'
import logo6 from '../Assets/Logo (5).png'
import logo7 from '../Assets/Logo (6).png'

import icons1 from '../Assets/Icon.png'
import icons2 from '../Assets/Icon (1).png'
import icons3 from '../Assets/Icon (2).png'


const Services = () => {
  return (
    <div className='md:px14 px-4 py-6 max-w-screen-2xl mx-auto ' id='services'>
        <div className='text-center my-8 '>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Lients</h2>
            <p>We have benn working with some Fortune 500+ clients</p>

            <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                <img src={logo7} />
            </div>
        </div>
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>
                Manage your entire community in a single syster
            </h2>
            <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
        </div>
       
      <div className='flex flex-col gap-5 items-center md:flex-row justify-evenly mt-10 '>
        <div className='card'>
            <img src={icons1} />
            <p className='text-2xl font-semibold text-neutralDGrey'>Membership Organisations</p>
            <p className='text-neutralGrey'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='card'>
            <img src={icons2} />
            <p className='text-2xl font-semibold text-neutralDGrey'>National Associations</p>
            <p className='text-neutralGrey'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='card'>
            <img src={icons3} />
            <p className='text-2xl font-semibold text-neutralDGrey'>Clubs And Groups</p>
            <p className='text-neutralGrey'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        </div>
    </div>
  )
}

export default Services
