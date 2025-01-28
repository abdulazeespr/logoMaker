"use client"

import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPalette from './_components/LogoColorPalette'
import LogoDesigns from './_components/LogoDesigns'
import Logoideas from './_components/Logoideas'
import PricingModel from './_components/PricingModel'

const CreateLogo = () => {

 const [step,setStep] = useState(1);
const [formData,setFormData] = useState()
 const onHandInputChange = (field,value)=>{

   setFormData(prev => ({
    ...prev,
    [field]:value
   }))

 

 }

  return (
    <div className='mt-28 p-8 border rounded-xl 2xl:mx-72'>
     {step === 1 ? <LogoTitle
      onHandInputChange={(v)=> onHandInputChange('title',v)}
      formData={formData}
       
     /> :
     step === 2 ? <LogoDesc
     onHandInputChange={(v)=> onHandInputChange('desc',v)}
     formData={formData}
     /> :
     step === 3 ? <LogoColorPalette
     onHandInputChange={(v)=> onHandInputChange('palette',v)}
     formData={formData}
     /> :
     step === 4 ? <LogoDesigns
     onHandInputChange={(v)=> onHandInputChange('design',v)}
     formData={formData}
     /> :
     step === 5 ? <Logoideas
     onHandInputChange={(v)=> onHandInputChange('idea',v)}
     formData={formData}
     /> :
     step === 6 ? <PricingModel
     onHandInputChange={(v)=> onHandInputChange('price',v)}
     formData={formData}
     /> :
     null
     }     
   
      <div className='flex justify-between items-center mt-10'>
       {step != 1 &&<Button onClick={()=>setStep(step-1)} variant="outline"><ArrowLeft/>  Previous</Button> } 
        <Button onClick={()=>setStep(step+1)}><ArrowRight/> Continue</Button>
      </div>

    </div>
  )
}

export default CreateLogo