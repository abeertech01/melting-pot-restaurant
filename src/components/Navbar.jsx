import React from "react"
import { motion } from "framer-motion"
import useScrollDirection from "../hooks/useScrollDirection"

function Navbar() {
  const scrollDirection = useScrollDirection()

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="fixed z-[999] w-full px-20 py-8 font-[Neue_Montreal] flex justify-between text-shadow-xl backdrop-blur-sm"
    >
      <div className="logo">
        <img
          src="/src/assets/melting-pot.svg"
          alt="logo"
          className="h-[3rem]"
        />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg font-light ${
                index === 4 && "ml-32"
              } capitalize`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
