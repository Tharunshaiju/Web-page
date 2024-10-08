import React from 'react'
import banner1 from '../Assets/Illustration.png'

const Home = () => {
  return (
    <section>
      <div className='bg-neutralSilver 'id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
          <div className='w-full mx-auto'>
            <div className='my-28 md:my-8 py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
              <div>
                <img src={banner1} />
              </div>
              <div className='md:1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:3/4'>
                Lessons and insights <span className='text-brandPrimary mt-2'><br /> from 8 years</span>
                </h1>
                <p className='text-neutralGrey text-base mb-8'>
                Where to grow your business as a photographer: site or social media?
                </p>
                <button className='btn-primary'>Register</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
