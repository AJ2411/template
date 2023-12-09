"use client";
import React from "react";
import remote from '@/assets/Images/remote.png'
import Itteams from '@/assets/Images/Itteams.png'
import devops from '@/assets/Images/devops.png'
import embeded from '@/assets/Images/embeded.png'
import Image from "next/image";

const securedNetworkList=[{id:1,img:remote
,title:"Individuals",
desc:(<>
<div >
       <p className="mx-4 my-6" >
          Access your computers, NAS,
          <br /> home automation, IP cameras,<br/> ham radios or other devices from<br/>
          </p>
         <p className="ml-24 -mt-4"> anywhere <br/></p>
        
        <p className="mx-4 my-6">
          Conveniently share files and <br/>
          data, or even play LAN games<br/>
          </p>
           <p className="ml-20 -mt-4">with others</p>
       
        <p className="mx-2 my-6">
           Manage secure network access <br/>
           
        </p>
        <p className="ml-14 -mt-4">to users of choice</p>
</div>
</>)},

{id:2,img:Itteams,title:"IT Teams",
desc:(<>
<div className="mx-2 my-5 text-center">
    <p className="my-9">
    Simplify your network stack by <br/>
    unifying VPNs, VLANs, and SD-<br/>
    WANs with one solution
    </p>
    <p className="my-5">
    Build, manage, and observe any<br/>
     number of remote, on premise, <br/>
     or cloud networks with one<br/>
      management interface
    </p>
    <p className="my-5">
    Easily provision remote access
    <br/> for all of your users
    </p>
</div>
</>)},

{id:3,img:devops,title:"DevOps",
desc:(<>
<div className="mx-2 my-5 text-center ">
    <p  className="my-9">
    Quickly build backplane networks<br/> spanning multiple cloud<br/> providers
    </p>
    <p className="my-2">
    Save on performance, storage,<br/> and bandwidth
    </p>
    <p className="my-2">
    Administrate and debug from <br/>anywhere
    </p>
    <p className="my-9">
    Secure corporate network <br/>overlay and failover layer
    </p>
</div>
</>)},

{id:4,img:embeded,title:"Embedded",
desc:(<>
<div  className="mx-2 my-5 text-center">
<p className="my-9">Enjoy vastly superior network <br/>control and functionality</p>

<p className="my-9">Develop and manage products or <br/>services running on their own<br/> decentralized networks</p>

<p className="my-9">
Create 4G/5G-capable secure<br/> networks for any IoT, edge or<br/> embedded device that can<br/> operate on 64MB of RAM
  </p>

</div>
</>)}]

function Securecard() {
  return (
   <>
   <div className="bg-black text-white text-4xl font-bold text-center">
    <h1>Secure networks for teams of any size</h1>
   </div>
   <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-black ">
    {
      securedNetworkList.map((item)=>(
        <div className="bg-black max-w-md mx-auto rounded-xl overflow-hidden shadow-md">
        <div className="ml-28">
        <Image src={item.img} alt="image" width={180} height={180}  />
        </div>
        <div className="p-6 text-white ml-6">
        <h2 className="text-3xl text-white font-bold mb-2 text-center">{item.title}</h2>
          <h3 className="text-white text-xl">{item.desc}</h3>
        </div>
      </div>
      ))
    }
   </div>
   </>
  );
}

export default Securecard;
