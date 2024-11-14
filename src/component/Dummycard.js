import React from 'react'

function Dummycard() {
  return (
    <div className=''>
       <div className=" border border-solid border-black rounded p-2 my-8 h-[350px] w-[250px] bg-slate-300 hover:bg-slate-200">
      <img  className="h-[200px] w-[300px] bg-gradient-to-r from-[#eee] via-[#fafafa] to-[#eee] bg-[length:300%] bg-[position-x:100%] animate-shimmer mb-9 rounded-lg"  />
      
      <button

        className="bg-blue-500 text-white px-4 py-2 mt-10 rounded hover:bg-blue-600 w-full"
      >Add to cart 
        
      </button>
    </div>
    </div>
  )
}

export default Dummycard
