"use client";
import React from "react";
import zerotier from "@/assets/Images/zerotier.png";
import servicetier from "@/assets/Images/servicetier.png";
import Image from "next/image";

const ZerotierList = [
  {
    id: 1,
    img: zerotier,
    title: "ZeroTier Enterprise",
    desc: (
      <>
        <div>
          <p>
            For high-volume VPN, IoT, IIoT, edge, embedded networking, multi &
            <br />
            hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.
          </p>
        </div>
      </>
    ),
    button: (
      <>
        <div>
          <button className="bg-indigo-700 ml-8 px-4 py-2 hover:text-black text-yellow-500 hover:bg-yellow-500 p-5 rounded-full border hover:border-yellow-500">Contact Sales</button>
        </div>
      </>
    ),
  },
  {
    id: 2,
    img: servicetier,
    title: "Service Providers",
    desc: (
      <>
        <div>
          <p>
            For hardware and software companies interested in embedding or
            <br />
            integrating the ZeroTier platform within their service offering, as
            well as
            <br />
            enterprise-facing channels including Managed Service Providers
            <br />
            (MSPs), Resellers, and Systems Integrators.
          </p>
        </div>
      </>
    ),
    button: (
      <>
        <div>
          <button className="bg-indigo-700 ml-8 px-4 py-2 hover:text-black text-yellow-500 hover:bg-yellow-500 p-5 rounded-full border hover:border-yellow-500 ">Contact SP Sales</button>
        </div>
      </>
    ),
  },
];

function Zerotier() {
  return (
    <>
      <div className="bg-black">
        <div className="grid grid-cols-1  ">
          {ZerotierList.map((item) => (
            <div className="flex  h-96 w-8/12 innovative-team-gradient   mx-auto rounded-2xl overflow-hidden shadow-md mb-16">
              <div className="p-6 text-white bg-indigo-700 ">
                <h2 className="text-5xl text-white font-bold  mx-6 mt-8 ">
                  {item.title}
                </h2>
                <h3 className="text-white text-xl ml-9 mx-2 my-4 py-4 ">{item.desc}</h3>
                <button className="">{item.button}</button>
              </div>

              <div className="mt-6 ml-8  " >
                <Image src={item.img} alt="image" width={325} height={325} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Zerotier;
