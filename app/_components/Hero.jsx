import React from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className='flex items-center mt-28 flex-col gap-5'>
      <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h2 className='text-5xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
      <p className='text-lg text-stone-500 font-bold'>{Lookup.HeroDesciption}</p>

      <div className='flex gap-5 w-full max-w-2xl'>
        <input placeholder={Lookup.InputTitlePlaceholder}
        className='p-3 broder rounded-md w-full shadow-sm'
        ></input>
        <Button className="w-full py-6">Get Started</Button>
      </div>
    </div>
  )
}

export default Hero