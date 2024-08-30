import React from "react"

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-32"
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-1/2 h-full rounded-xl bg-[#142422] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-32"
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2020
          </button>
        </div>
        <div className="card relative w-1/2 h-full rounded-xl bg-[#142422] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-32"
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2020
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
