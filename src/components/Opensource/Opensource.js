"use client"
import React from 'react'


const sourceList=[{
    id:1, title:"Open Source Community Edition",
    desc:"Featuring unlimited nodes, networks, and admins. Self-hosted. Designed for non-Commercial Use cases.",
    buttons: (
        <>
          <div>
            <h1 className="bg-gray-900 ml-8 px-4 py-2 text-white hover:text-black  hover:bg-white p-5 rounded-full border hover:border-white">ZeroTier Github</h1>
          </div>
        </>
      ),
      subheading: (
        <>
          <div>
            <h5 className="  px-4 py-2 text-white hover:text-yellow-500 ">Read Documentaion</h5>
          </div>
        </>
      ),
    
}]

function Opensource() {
  return ( 
<>
<div className='bg-black'>
    <div  className='grid grid-cols-1 '>
          {sourceList.map((item) => (
            <div key={item.id}  className=" h-60 w-8/12  mx-auto rounded-2xl overflow-hidden shadow-md  mb-16">;
              <div className="p-6 text-white bg-gray-900 ">
                <h2 className="text-3xl text-white font-bold mb-2 mx-6  ">
                  {item.title}
                </h2>
                <h3 className="text-white text-xl ml-9 mx-2 my-4 py-4 ">{item.desc}</h3>
                <div className='flex space-x-4'>
                <button className="text-lg">{item.buttons}</button>
                <h3 className='text-xl'>{item.subheading}</h3>
                </div>
                
              </div>

              
            </div>
          ))} 


    </div>

</div>


</>


  )
}

export default Opensource