import { motion, useAnimation } from "framer-motion"
import React from "react"

function Featured() {
  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({
      y: "0",
    })
  }

  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    })
  }
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Dishes
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-lime-300 overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-shadow-xl font-semibold">
              {"Steak".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://www.abelandcole.co.uk/media/2072_17237_x.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <div className="card-container relative w-1/2 h-[75vh]">
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="card w-full h-full rounded-xl overflow-hidden border"
            >
              <h1 className="absolute flex overflow-hidden text-lime-300 z-[9] leading-none tracking-tighter right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-8xl text-shadow-xl font-semibold">
                {"Kebab".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://apinchofadventure.com/wp-content/uploads/2022/05/Kafta-feature-image-5.jpg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
