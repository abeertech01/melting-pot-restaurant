import React from "react"
import logo from "../assets/melting-pot.svg"

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['Founders_Grotesk_X-Condensed']">
      <div className="w-1/2 h-full flex flex-col justify-between items-start">
        <div className="heading">
          <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-10">
            Arab
          </h1>
          <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-10">
            Cuisine
          </h1>
        </div>
        <img src={logo} alt="logo" className="h-[40px] inline-block" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-10">
          Presentations
        </h1>
        <div className="dets font-['Neue_Montreal'] mt-10">
          <a className="block text-xl font-light" href="#">
            Facebook
          </a>
          <a className="block text-xl font-light" href="#">
            Instagram
          </a>
          <a className="block text-xl font-light" href="#">
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
