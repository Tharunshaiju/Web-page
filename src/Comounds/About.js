import React from 'react'
import aboutImg from '../Assets/Frame 35.png'
import Icons1 from '../Assets/AbIcon (1).png'
import Icons2 from '../Assets/AbIcon (2).png'
import Icons3 from '../Assets/AbIcon (3).png'
import Icons4 from '../Assets/AbIcon (4).png'

const About = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='About'>
            <div className='md:w-11/12 mx:auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img className='px-10' src={aboutImg} />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='btn-primary'>Learn More</button>
            </div>

            </div>

        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
               <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-3/5'>Helping a local <br /><span className='text-brandPrimary'>business reinvent itself</span></h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>We reached here with our hard work and dedication</p>
            </div>

          
        
        <div className='md:w-1/2 mx-auto flex sm:flex-row md:flex-col sm:items-center justify-around'>
          <div className='space-y-8'>
            <div className='flex items-center gap-4 '>
              <img src={Icons1} />
              <div>
                <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                <p>Members</p>

              </div>
              
              <div className='flex items-center gap-4'>
              <img src={Icons3} />
              <div>
                <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                <p>Clubs</p>
              </div>   
            </div>   
            </div>

          
            <div className='flex items-center gap-4'>
              <img src={Icons2} />
              <div>
                <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                <p>Event Bookings</p>
              </div>
              <div className='flex items-center gap-4'>
              <img src={Icons4} />
              <div>
                <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                <p>Payments</p>
              </div>   
            </div>
   
            </div>

          </div>
        </div>

        </div>

      </div>

    </div>
  )
}

export default About
