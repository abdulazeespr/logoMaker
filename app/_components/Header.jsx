import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
        
        <div className='flex justify-center items-center font-serif text-2xl mx-5 font-bold'>
            <Image src={'/logo.svg'} alt='logo' width={60} height={70} />
            <h1>Maker</h1>
        </div>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header