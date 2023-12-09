'use client'
import React from 'react'
import Image from 'next/image'
import vpn from '@/assets/Images/vpn.png'
import desktop from '@/assets/Images/desktop.png'

function Justwork() {
  return (
    <>
    <div className='bg-black'>
    <div className='grid lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-2   bg-gray-900 h-full w-10/12 px-10 ml-28 rounded-2xl overflow-hidden shadow-md '>
       <div className='ml-4 mt-2 '>
       <Image src={vpn} alt="image" width={400} height={225} />
       </div>

       <div className='mt-20'>
       <h1 className='text-white text-3xl py-4 font-bold'>IT just works</h1>
       
       <h3 className=' text-white text-2xl'>ZeroTier combines the capabilities of VPN and SD<br/>-WAN, simplifying network management. Enjoy<br/> flexibility while avoiding costly hardware vendor<br/> lock in.</h3>
       
       <button className='bg-white  px-8 py-2 text-black hover:text-white p-5 rounded-full border hover:border-white hover:bg-black mt-4'>Learn More›</button>
       </div>


       

       <div className='mt-4'>
       <h1 className='text-white text-3xl py-4 font-bold'>Speed, flexibility, and security</h1>
       
       <h3 className=' text-white text-2xl leading-relaxed '>Set up ZeroTier in minutes with remote, automated<br/> deployment.<br/>

                      Emulates Layer 2 Ethernet with multipath,<br/> multicast, and bridging capabilities.</h3>

       
       <button className='bg-white  px-8 py-2 text-black hover:text-white p-5 rounded-full border hover:border-white hover:bg-black mt-4'>Get Zero Tier</button>
       </div>
       <div className=' h-96 w-10/12 '>
       <Image src={desktop} alt="image" width={400} height={225} />
       </div>
       

    </div>
    </div>
    
    </>
  )
}

export default Justwork