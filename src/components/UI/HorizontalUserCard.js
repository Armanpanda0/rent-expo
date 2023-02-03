import React from 'react'

const HorizontalUserCard = () => {
  return (
    <div className=" w-9/12 flex items-center justify-between flex-row bg-slate-200 py-4 mx-auto px-2 rounded-sm">
    <div className="w-2/12  ">
        <img className="rounded-full" src="http://source.unsplash.com/100x100/?man"/>
    </div>
    <div className="flex  flex-col items-start flex  w-6/12">
      <div className="flex flex-row  gap-2">
      booking date: <p>23/12/2022</p>
        
      </div>
      <div className="flex flex-row  gap-2">
      booked by: <p>parmesh chandra</p>
        
      </div>
         </div>
      <div className="h-full w-32 flex flex-col">
            <div className="font-semibold">Total fare</div>
            <div className="font-semibold text-lg">240</div>
      </div>
    </div>

  )
}

export default HorizontalUserCard