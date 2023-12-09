'use client'
import React from 'react'

const newsList=[{
    id:1, title:"Newsletter Signup",
    desc:(<>

<div>
<p>
Join over 350,000 community members worldwide and receive the latest news from Team
 ZeroTier.
</p>
 </div>
 </>),

    button: (
        <>
          <div>
            <h3 className="bg-yellow-500 ml-28  mb-8 px-4 py-2 text-black hover:text-black p-5 rounded-full border hover:border-yellow-500">Subscribe</h3>
          </div>
        </>
      ),
      subheading: (
        <>
          <div className='ml-4 '>
          <input
      type="email"
      id="email"
      name="email"
      placeholder="Email Address"
      required
      className=" h-10 mb-4 -mr-28"
    />
          </div>
        </>
      ),
    
}]


function Newsletter() {
  return (

<>
<div className='bg-black'>
    <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
          {newsList.map((item) => (
            <div className=" h-60 w-8/12  mx-auto   mb-16">;
              <div className="p-6 text-white bg-gray-900 rounded-2xl overflow-hidden shadow-md">
                <h2 className="text-2xl text-white  mb-2 mx-6 ml-1 ">
                  {item.title}
                </h2>
                <div className='flex space-x-3'>
                <h3 className="text-white text-lg ">{item.desc}</h3>
                <h3 className='text-lg '>{item.subheading}</h3>
                <button className="text-lg">{item.button}</button>
                </div>
                
              </div>

              
            </div>
          ))} 


    </div>

</div>


</>

  )
}

export default Newsletter