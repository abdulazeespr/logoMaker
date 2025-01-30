"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContex } from '../_context/UserDetailContext'
import Prompt from '../_data/Prompt'
import axios from 'axios'
import Image from 'next/image'


const GenerateLogo = () => {

  const {userDetail,setUserDetail} = useContext(UserDetailContex)
  const [formData,setFormData] = useState()
  const [loading,setLoading] = useState(false)
   const [logoImage,setLogoImage] = useState()

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

  const GenerateLogo = async()=>{
    setLoading(true)
    const PROMPT = Prompt.LOGO_PROMPT
    .replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
    .replace('{logoColor}',formData?.palette)
    .replace('{logoDesign}',formData?.design?.title)
    .replace('{logoPrompt}',formData?.design?.prompt)
    .replace('{logoIdea}',formData.idea)
      console.log(PROMPT)

      //Generate Logo Prompt from Ai
      //Generate logo Image


      const result = await axios.post('api/ai-logo-model',{
        prompt:PROMPT,
        email:userDetail?.email,
        title:formData?.title,
        desc:formData?.desc,
      })

      console.log(result?.data)
      setLogoImage(result?.data?.image)
      setLoading(false)
  }  


  return (
    <div>
      <h2>{loading&& <Image className='mt-10' src={'loading.svg'} width={400} height={300}/> }</h2>
      {!loading && 
      <div className='mt-10 p-5'>
        <h2 className='font-bold text-2xl'>Generate image :</h2>
      <Image src={logoImage} alt='logo' width={200} height={200}/>
       </div>
      }
    </div>
  )
}

export default GenerateLogo