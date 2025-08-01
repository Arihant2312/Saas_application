import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Sparkle } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import { Gem } from 'lucide-react'
import Creationitem from '../components/Creationitem'

function Dashboard() {
  const [creations,setcreations]=useState([])
  const getDashboarddata=async()=>{
     setcreations(dummyCreationData)
  }
  useEffect(()=>{
    getDashboarddata()

  },[])
  return (
    <div className='h-full overflow-y-scroll p-6 '>
      <div className="flex justify-start gap-4 flex-wrap">

        {/* active paln cretion card */}
        <div className='flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200'>
          <div className="text-slate-600">
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className="w-14 h-12 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
            <Sparkle className='w-6 text-white'/>
          </div>

        </div>     
         <div className='flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200'>
          <div className="text-slate-600">
            <p className='text-sm'>Active Plan</p>
            <h2 className='text-xl font-semibold'><Protect plan='premium' fallback='Free'>Premium</Protect></h2>
          </div>
          <div className="w-14 h-12 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
            <Gem className='w-6 text-white'/>
          </div>

        </div>
      </div>
      <div className="space-y-3">
        <p mt-6 mb-4>Recent Creations</p>
        {
          creations.map((item)=><Creationitem key={item.id} item={item}/>)
        }
      </div>
       
    </div>
  )
}

export default Dashboard