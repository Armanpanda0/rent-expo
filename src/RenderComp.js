import React, { useContext, useEffect } from 'react'
import { Val } from './Store'

const RenderComp = ({children}) => {
  
    const data = useContext(Val)
   
    useEffect(()=>{


        if(window.location.pathname==="/login")
        {
                data.setIsVisible(false)
        }
        else
        {
            data.setIsVisible(true)
        }




    },[])
  
  
  
    return (
    <>{children}</>
  )
}

export default RenderComp