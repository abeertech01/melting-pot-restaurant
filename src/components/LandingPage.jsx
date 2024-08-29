import React from "react"
import { FaArrowUpLong } from "react-icons/fa6"

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.2vw] bg-green-500"></div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
