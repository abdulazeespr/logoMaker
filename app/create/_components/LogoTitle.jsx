"use client"
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'



const LogoTitle = ({onHandInputChange,formData}) => {


  const searchParam = useSearchParams();
  const [title,setTitle] = useState(searchParam.get("title")?? '') 


  return (
    <div>
        <HeadingDesc
        title={Lookup.LogoTitle}
        description={Lookup.LogoTitleDesc}
        />
        <input type='text' placeholder={Lookup.InputTitlePlaceholder}
         className='p-4 border rounded-lg mt-5 w-full'
         defaultValue={title}
         onChange={(e)=>{
            onHandInputChange(e.target.value)
         }}
        />

    </div>
  )
}

export default LogoTitle