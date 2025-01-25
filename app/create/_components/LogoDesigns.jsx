import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import LogoDesign from '@/app/_data/LogoDesign'
import Image from 'next/image'

const LogoDesigns = ({onHandInputChange,formData}) => {

   const [selectedOption,setSelectedOption] =useState(formData?.design)

  return (
    <div className='my-10'>
      <HeadingDesc
       title={Lookup.LogoDesignTitle}
       description={Lookup.LogoDesignDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
        {LogoDesign.map((design,index)=>(
            <div key={index} onClick={()=>{ setSelectedOption(design.title) 
                onHandInputChange(design)
            }}
             className={`p-2 ${selectedOption === design.title && 'broder-2 bg-primary rounded-lg '}`}
            >
            <Image src={design.image} alt={design.title} width={300} height={200}
             className='w-full rounded-xl h-[200px] object-cover '
            />
            </div>
        ))}
      </div>

    </div>
  )
}

export default LogoDesigns