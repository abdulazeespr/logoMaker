"use client"
import React, { useEffect, useState } from 'react'
import Header from './_components/Header'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContex } from './_context/UserDetailContext'

const Provider = ({children}) => {

  const {user} = useUser();
  const [userDetail,setUserDetail] = useState()
  //save user data 

useEffect(()=>{

  user&&CheckUserAuth();

},[user])


  const CheckUserAuth = async ()=>{

    //save user to database
      try{
     const result = await axios.post('api/users',{
      userName:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress
     })

     console.log(result.data)
     setUserDetail(result.data)
    }catch(e){
      console.log(e)
    }

    
      
  }

  return (
    <div>
       <UserDetailContex.Provider value={{userDetail,setUserDetail}}>
        <Header/> 
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 '>
        {children}
        </div>
        </UserDetailContex.Provider>
        </div>
  )
}

export default Provider