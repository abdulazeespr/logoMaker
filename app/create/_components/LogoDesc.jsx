import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandInputChange,formData}) => {
  return (
    <div className='my-10'>

        <HeadingDesc
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
        />
      <input type='text' placeholder={Lookup.InputTitlePlaceholder}
         className='p-4 border rounded-lg mt-5 w-full'
        value={formData?.desc}
         onChange={(e)=>{
            onHandInputChange(e.target.value)
         }}
        />

    </div>
  )
}

export default LogoDesc