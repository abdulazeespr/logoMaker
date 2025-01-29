"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContex } from '../_context/UserDetailContext'
import Prompt from '../_data/Prompt'

const GenerateLogo = () => {

  const {userDetail,setUserDetail} = useContext(UserDetailContex)
  const [formData,setFormData] = useState()
  useEffect(()=>{
    if(typeof window !=undefined && userDetail?.email){

      const storage = localStorage.getItem('formData')

       if(storage){
        setFormData(JSON.parse(storage))
       }
    }
  },[userDetail])

useEffect(()=>{

  if(formData?.title){
    GenerateLogo()
  }

},[formData])

  const GenerateLogo = ()=>{
    const PROMPT = Prompt.LOGO_PROMPT
    .replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
    .replace('{logoColor}',formData?.palette)
    .replace('{logoDesign}',formData?.design?.title)
    .replace('{logoPrompt}',formData?.design?.prompt)
      console.log(PROMPT)
  }  


  return (
    <div>page</div>
  )
}

export default GenerateLogo