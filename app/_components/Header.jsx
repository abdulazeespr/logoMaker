import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

   const {user} =useUser()

  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
        
        <div className='flex justify-center items-center font-serif text-2xl mx-5 font-bold'>
            <Image src={'/logo.svg'} alt='logo' width={60} height={70} />
            <h1>Maker</h1>
        </div>
        <div className='flex items-center gap-3'>
        {user && <Link href='/dashboard'><Button >Dashboard</Button></Link>}
        {!user &&<Button>Get Started</Button>}
        <UserButton/>
        </div>
    </div>
  )
}

export default Header