import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'


const LogoColorPalette = ({onHandInputChange,formData}) => {

  const [selectedOption,setSelectedOption] = useState(formData?.palette)

  return (
    <div className='my-10'>
        <HeadingDesc
         title={Lookup.LogoColorPaletteTitle}
         description={Lookup.LogoColorPaletteDesc}
        />

        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
            {Colors.map((palette,index)=>(
                <div className={`flex p-2  cursor-pointer ${selectedOption === palette.name && 'broder rounded-lg bg-primary'}`} key={index}>
                   {palette.colors.map((color,index)=>(
                    <div
                     key={index} 
                     className='h-24 w-full' 
                     style={{backgroundColor:color}}
                      onClick={()=>{ setSelectedOption(palette.name)
                        onHandInputChange(palette.name)

                      }}
                     >
                       
                    </div>
                   ))}
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default LogoColorPalette