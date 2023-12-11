"use client";

import React from "react";
import Image from "next/image";
import user from "@/assets/Images/user.png";

const InnovativeTeamList = [
  {
    id: 1,
    img: user,
    title: "TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS",
    desc: (
      <>
        <div className="mx-4 my-4">
          <p>
          &quot;Metropolis deploys computer vision in parking lots & car wash;
            facilities across the US, integrating ZeroTier to eliminate the
            complexity of managing multiple, disparate networks to deliver a
            seamless, groundbreaking and world-class customer experience.&quot;
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    img: user,
    title: "PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY",
    desc: (
      <>
        <div>
          <p>
          &quot;In early product development, we needed a way to easily connect our
            growing IoT product-base to our systems. ZeroTier provided an easy,
            and reliable way to achieve that, and has been growing with us.&quot;{" "}
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    img: user,
    title: "ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS",
    desc: (
      <>
        <div>
        <p>
        &quot;Loft Orbital uses ZeroTier to improve interoperability between its
            offices in the United States and France. It connects our engineers
            to key resources quickly and easily, which allows our team to focus
            on making space simple.&quot;{" "}
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    img: user,
    title: "BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL",
    desc: (
      <>
        <div>
          <p>
          &quot;Loft Orbital uses ZeroTier to improve interoperability between its
            offices in the United States and France. It connects our engineers
            to key resources quickly and easily, which allows our team to focus
            on making space simple.&quot;{" "}
          </p>
        </div>
      </>
    ),
  },
];

function Innovativeteam() {
  return (
    <>
    <div className="bg-black">
    <h1 className="text-center bg-black text-white text-5xl font-bold">Used by the world&apos;s most innovative teams</h1>

      <div className="grid grid-cols-1 mt-16 ">
          {InnovativeTeamList.map((item) => (
            <div key={item.id} className="flex  h-80 w-9/12 innovative-team-gradient  mx-auto rounded-2xl overflow-hidden shadow-md mb-16">
              <div className="mt-6 ml-8">
                <Image src={item.img} alt="image" width={175} height={175} />
                </div>
                <div className="p-6 text-white ">
                 <h2 className="text-2xl text-white  mb-2 mx-6 ">
                  {item.desc}
                </h2>
                <h3 className="text-white text-xl ml-9">{item.title}</h3>
              </div>
            </div>
            
          ))}
           </div>
       </div>
       
      
    </>
  );
}

export default Innovativeteam;
