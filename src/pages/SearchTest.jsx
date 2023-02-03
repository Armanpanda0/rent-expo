import React from 'react'
import { useState } from 'react';
import carData from '../assets/data/carData';
import CarItem from "../components/UI/CarItem"
const SearchTest = () => {
        
const [search,setSearch] =useState([]);
const [name,setName]=useState("");
const [type,setType]=useState(2);



const getVehicles =() =>{

const data =carData.filter((item)=>{
    if(item.carName.includes(name,0) && item.type == type)
    {
        return item
    }
    return 
    


})

console.log(data);
setSearch(data)




}




  return (
   <div>
 <div>
        <input type ="text" placeholder="Search vehicle" onChange ={(e)=>{
          setName(e.target.value)
        }}/>
        <select onChange={(e)=>{
          console.log(e.target.value)
          setType(e.target.value);
        }}>
            <option value={2}>car</option>
            <option value={1}>bike</option>
        </select>
        <button onClick={getVehicles}>search</button>
    </div>
        
        {
          search.map((item)=><CarItem  item={item}/>)
        }


     

   </div>
  )
}

export default SearchTest