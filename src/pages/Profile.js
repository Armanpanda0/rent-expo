import React, { useContext } from 'react'
import { Avatar, Space, Tabs } from 'antd';
import Header from '../components/Header/Header';
import HorizontalUserCard from '../components/UI/HorizontalUserCard';
import HorizontalCard from '../components/UI/HorizontalVehicleCard';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { Val } from '../Store';
import { Col } from 'reactstrap';
const Profile = () => {
    
    
    
    
    
    const TABS =[{
        label:'availed',
        element:(<div className="flex flex-col gap-2 ">
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
        </div>)    
    },
    {
        label:'provided',
        element:(<div
        className="flex flex-col gap-2 "><HorizontalUserCard/>
            <HorizontalUserCard/>
            <HorizontalUserCard/>
            <HorizontalUserCard/>
        
        </div> )   
    },


]
    
    
    
const data =useContext(Val);
    
    
    
    
    
    
    
return (






  <>
  <div className="w-screen bg-orange-500 h-24 flex items-center justify-between px-4">
  <Link to ="/home" onClick={()=>{data.setIsVisible(true)}}>
  <div className="p-2 rounded-full">
<BiArrowBack  color="white"/>
</div>
</Link>


              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center ">
                    <i class="ri-car-line"></i>
                    <span>
                     EZEE <br /> RIDES
                    </span>
                  </Link>
                </h1>
              </div>
            

  </div>
  <div className="w-full flex items-center justify-center py-2 flex-col">
     <div className="m-1 mr-2 w-24 h-24 relative flex justify-center items-center bg-orange-500 p-2 rounded-full text-xl text-white">
      <img src="http://source.unsplash.com/100x100/?man" className="rounded-full" />
    </div>
    <div className="font-semibold text-lg">ashish mahunta</div>

</div>

  <Space />
    <Tabs
    defaultActiveKey="1"
    centered
    items={TABS.map((elem,id)=>{

            return{
                key:id,
                label:elem.label,
                children:elem.element
            }


    })}
  />

  </>
);}
export default Profile;


