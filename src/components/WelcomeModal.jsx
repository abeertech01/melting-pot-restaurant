import React from "react"
import logo from "../assets/melting-pot.svg"

function WelcomeModal({ isFading }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50 transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="p-8 rounded-lg shadow-lg">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default WelcomeModal
