import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const PricingModel = () => {
  return (
    <div className='my-10'>
        <HeadingDesc 
         title={Lookup.LogoPriceTitle}
         description={Lookup.LogoPriceDesc}
/>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 '>
          {Lookup.pricingOption.map((pricing,index)=>(
            <div key={index} className='flex flex-col items-center p-5 border '>
                <Image src={pricing.icon} alt={pricing.title} width={50} height={50}/>
                <h2 className='font-medium text-2xl'>{pricing.title}</h2>
                <div>
                    {pricing.features.map((freature,index)=>(
                      
                        <h2 key={index} className='text-lg mt-3'>{freature}</h2>
                    ))}
                </div>

                <Button className="mt-5">{pricing.button}</Button>
            </div>
          ))}
       </div>

    </div>
  )
}

export default PricingModel