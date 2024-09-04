import React from "react"
import sausagePlatter from "../assets/sausage-platter.jpg"

function About() {
  return (
    <div className="w-full p-20 bg-lime-300 rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw] tracking-tight">
        At Melting Pot, we passionately craft each dish with authentic Arab
        flavors and care. Our warm service and exquisite cuisine ensure every
        guest feels cherished and satisfied.
      </h1>
      <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-lime-700">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach: </h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img
            src={sausagePlatter}
            alt="sausage platter"
            className="w-full h-full object-cover overflow-hidden rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default About
