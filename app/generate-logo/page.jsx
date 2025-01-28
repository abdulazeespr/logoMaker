"use client"
import React, { useContext } from 'react'
import { UserDetailContex } from '../_context/UserDetailContext'

const GenerateLogo = () => {

  const {userDetail,setUserDetail} = useContext(UserDetailContex)

  console.log(userDetail)
  return (
    <div>page</div>
  )
}

export default GenerateLogo