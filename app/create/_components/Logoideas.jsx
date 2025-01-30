import React, { useEffect, useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import axios from 'axios'
import Prompt from '@/app/_data/Prompt'
import { Loader2Icon } from 'lucide-react'

const Logoideas = ({formData,onHandInputChange}) => {

const [ideas,setIdeas] = useState([])
const [loading,setLoading] =useState(false)
const [select,setSelect] = useState()

  useEffect(()=>{
   generateLogoDesignIdea()
  },[])

  const generateLogoDesignIdea = async()=>{
    setLoading(true)
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}',formData?.design?.title)
    .replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
    .replace('{logoPrompt}',formData?.design?.prompt)
    const result = await axios.post('/api/ai-design-ideas',{
      prompt:PROMPT
    })
    setIdeas(result.data.ideas)
    setLoading(false)
  }



  return (
    <div className='my-10'>
      <HeadingDesc
       title={Lookup.LogoIdeaTitle}
       description={Lookup.LogoTitleDesc}
      />

    <div className='flex items-center justify-center'>
    {loading && <Loader2Icon className='animate-spin my-10'/>}
    </div>
     <div className='flex flex-wrap gap-3 mt-6'>
         {ideas?.map((idea,index)=>(
          <div key={index}
          onClick={()=>{setSelect(idea)
            onHandInputChange(idea)
          }}
           className={`p-2 rounded-full border px-3 cursor-pointer hover:bg-primary ${select === idea && 'border-primary'}`}
          >{idea}</div>
         ))}
         <div
           onClick={()=>{setSelect('Let Ai select the best idea')
            onHandInputChange('Let Ai select the best idea')
          }}
          className={`p-2 rounded-full border px-3 cursor-pointer hover:bg-primary ${select === 'Let Ai select the best idea' &&'border-primary bg-primary'}`}
         >Let Ai select the best idea</div>
     </div>

    </div>
  )
}

export default Logoideas