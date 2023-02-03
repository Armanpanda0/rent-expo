import React,{createContext, useState} from 'react'





export const Val =createContext();

const Store = ({children}) => {


        
    const[isVisible,setIsVisible] =useState(true)



    return (
        <Val.Provider value={{isVisible,setIsVisible}}>
    {children}
    </Val.Provider>
  )
}

export default Store