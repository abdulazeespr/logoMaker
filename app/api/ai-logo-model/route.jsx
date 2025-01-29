import { AILogoPrompt } from "@/app/config/Aimodel";
import { db } from "@/app/config/FirebaseConfig";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
    
   const {prompt,email,title,desc} = await req.json();

   try{
     //Generate Ai Text Prompt for logo
 
     const AiPromptResult = await AILogoPrompt.sendMessage(prompt)

    console.log(JSON.parse(AiPromptResult.response.text()).prompt)
      const AiPrompt = JSON.parse(AiPromptResult.response.text())
      //Generate logo from the Prompt

      const response = await axios.post("https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
              AiPrompt.prompt,
        {
            headers: {
				Authorization: "Bearer "+process.env.HUGGING_FACE_API_KEY,
				"Content-Type": "application/json",
			},
            responseType:"arraybuffer"
        }
      
        
      )

      //Convert to Base64 Image

      const buffer = Buffer.from(response.data,"binary")
      const base64Image = buffer.toString('base64')

      const base64ImageWithMine = `data:image/png;base64,${base64Image}`;
      
      try{

          await setDoc(doc(db,'users',email,'logos',Date.now().toString()),{
            image:base64ImageWithMine,
            title:title,
            email:email,
            desc:desc,
          })
      }catch(e){

        console.log(e)

      }

      return NextResponse.json({image : base64ImageWithMine})
   }catch(e){
    console.log(e)
  return NextResponse.json({error:e})

   }
  

}