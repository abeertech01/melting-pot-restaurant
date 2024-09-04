import { motion } from "framer-motion"
import React from "react"
import { FaArrowUpLong } from "react-icons/fa6"
import tacos from "../assets/tacos.png"

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="relative w-full h-screen pt-1 bg-[url('/src/assets/mandi-biryani.jpg')] bg-cover"
    >
      <div className="absolute w-full h-full bg-black/80" z-0 />
      <div className="relative z-20 textstructure mt-52 px-20">
        {["Get The Real", "Experience", " of Arab Cuisine"].map(
          (item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                      className="w-[9vw] h-[5.7vw] relative top-[0.87vw] mr-1 rounded-md bg-lime-300 px-2"
                    >
                      <img src={tacos} alt="tacos" />
                    </motion.div>
                  )}
                  <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-semibold">
                    {item}
                  </h1>
                </div>
              </div>
            )
          }
        )}
      </div>
      <div className="relative z-20 border-t-2 border-zinc-500 mt-20 flex justify-between items-center py-5 px-20">
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
