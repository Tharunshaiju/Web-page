import React from 'react'
import BlogImg1 from '../Assets/image 18.png'
import BlogImg2 from '../Assets/image 19.png'
import BlogImg3 from '../Assets/image 20 (1).png'

const Blog = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
        <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      </div>
      <div className=' ml-10 md:ml-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>

    <div className=''>
            <img className='relative ' src={BlogImg1} />
            <p className='text-neutralGrey top-[800px] broder-grey-500'>Creating Streamlined Safeguarding Processes with OneRen</p>
        </div>
        <div>
            <img src={BlogImg2} />
            <p className='text-neutralGrey '>What are your safeguarding responsibilities and how can you manage them?</p>
        </div>
        <div>
            <img src={BlogImg3} />
            <p className='text-neutralGrey '>Revamping the Membership Model with Triathlon Australia</p>
        </div>

      </div>
      </div>

  )
}

export default Blog
