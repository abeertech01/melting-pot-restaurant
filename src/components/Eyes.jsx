import React, { useEffect, useRef, useState } from "react"

function Eyes() {
  const [rotateLeftEye, setRotateLeftEye] = useState(0)
  const [rotateRightEye, setRotateRightEye] = useState(0)
  const leftEye = useRef(null)
  const rightEye = useRef(null)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const leftEyeRect = leftEye.current.getBoundingClientRect()
      const rightEyeRect = rightEye.current.getBoundingClientRect()

      const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2
      const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2
      const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2
      const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2

      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaLeftEyeX = mouseX - leftEyeCenterX
      let deltaLeftEyeY = mouseY - leftEyeCenterY
      let deltaRightEyeX = mouseX - rightEyeCenterX
      let deltaRightEyeY = mouseY - rightEyeCenterY

      var leftEyeAngle =
        Math.atan2(deltaLeftEyeY, deltaLeftEyeX) * (180 / Math.PI)
      var rightEyeAngle =
        Math.atan2(deltaRightEyeY, deltaRightEyeX) * (180 / Math.PI)

      setRotateLeftEye(leftEyeAngle - 180)
      setRotateRightEye(rightEyeAngle - 180)
    })
  }, [])

  return (
    <div className="eyes w-full h-screen overflow-hidden cursor-[url('/src/assets/burger.png'),auto]">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div
              ref={leftEye}
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
            >
              {/* line  */}
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateLeftEye}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div
              ref={rightEye}
              className="relative flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900"
            >
              {/* line  */}
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateRightEye}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
