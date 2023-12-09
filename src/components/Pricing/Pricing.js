"use client";
import React from "react";
import Image from "next/image";
import tier from "@/assets/Images/tier.png";
import bluetier from "@/assets/Images/bluetier.png";
import whitetier from "@/assets/Images/whitetier.png";

const pricingList = [
  {
    id: 1,
    img: whitetier,
    heading: "Basic",
    subheading: "For Everyone / ZeroTier Hosted Controller",
    button: (
      <>
      <div>
        <button className="bg-white px-4 py-2 text-black hover:text-white hover:bg-black p-5 rounded-full border hover:border-white">Free Sign Up</button>
      </div>
      
      </>
    ),
    points: (
      <>
        <div className="text-center">
          <p>
            ✓ 1 Admin<br/>
             ✓ 25 Nodes<br/> 
             ✓ Unlimited Networks<br/>
              ✖ Business SSO: n/a <br/>
              ✓Community Support <br/>
              FREE
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    img: tier,
    heading: "Professional",
    subheading: "Licensed Only For Individuals and Testing",
   
    points: (
      <>
        <div classname="text-center">
          <p>
            ✓ Admins | $10 USD/mo each <br/>
            ✓ 25 Node Packs | $5 USD/mo<br/>
             ✓ Unlimited
            Networks <br/>
            ✓ Business SSO | $5 USD/mo per seat <br/>
            ✓ Community Support<br/>
            Starting at $5 USD/month
          </p>
        </div>
      </>
    ),
    button: (
      <>
      <div>
        <button className="bg-yellow-500 ml-8 px-4 py-2 text-black hover:text-yellow-500 hover:bg-black p-5 rounded-full border hover:border-yellow-500">Sign Up</button>
      </div>
      
      </>
    ),
  },
  {
    id: 3,
    img: bluetier,
    heading: "Business",
    subheading: "Licensed for Commercial Deployments",
    points: (
      <>
        <div className="text-center">
          <p>
            Use Cases Include:<br/>
             ∙ IoT/IIoT <br/>
             ∙ SD-WAN <br/>
             ∙ VPN <br/>
             ∙ Remote Monitoring and
            Management <br/>
            Contact Sales for Pricing
          </p>
        </div>
      </>
    ),
    button: (
      <>
      <div >
        <button className="bg-indigo-700 ml-8 px-4 py-2 text-white hover:bg-black p-5 rounded-full border hover:border-indigo-700">Contact Sales</button>
      </div>
      
      </>
    ),
  },
];


function Pricing() {
  return (
    <>

      <div className="bg-black text-white">
        <h1 className="text-5xl text-center">Pricing</h1>
        <h5 className="text-center text-xl my-2">ZeroTier makes networking easy for everyone - anywhere.</h5>
       
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6  bg-black mt-10 ">
        {
          pricingList.map((item)=>(
      <div className=" bg-gray-900  mx-auto rounded-xl overflow-hidden shadow-md mb-20">
        <div className="ml-48 mt-12">
        <Image src={item.img} alt="image" width={70} height={70}  />
        </div>
        <div className="p-6 text-white ml-6">
        <h2 className="text-3xl text-white font-bold mb-2  text-center">{item.heading}</h2>
          <h3 className="text-white text-lg my-4 text-center">{item.subheading}</h3>
          <h3 className="text-white text-xl my-8 mx-2">{item.points}</h3>
          <h3 className="ml-20 ">{item.button}</h3>
        </div>
      </div>
    
      ))
    }
        </div>
      </div>
      
    </>
  );
}

export default Pricing;
