"use client"
import { UserDetailContex } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Info = () => {
  
    const {userDetail,setUserDetail} = useContext(UserDetailContex)

  return (
    <div>

        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-3xl text-primary'>Hello, {userDetail?.name}</h2>
            <div className='flex items-center gap-2'>
                <Image src={'/coin.png'} alt='coin' width={50} height={50}/>
                <h2 className='font-bold text-3xl '>{userDetail?.credits} Credit Left</h2>
            </div>
        </div>
   
        <div className='flex justify-between items-center mt-10'>
            <h2 className='font-bold text-2xl'>Dashboard</h2>
            <Link href='/create'>
           
            <Button>+ Create New logo</Button>
            </Link>
        </div>

    </div>
  )
}

export default Info