import { useEffect, useState } from 'react'
import "../index.css"
import "../css/VehicleStore.css"
import Header from  "../components/header/Header"
import Logo from "../assets/img/logobluecar.jpg"
import Sun from "../assets/img/sun.png"
import Moon from "../assets/img/half-moon.png"



function VehicleStore() {

 const categoriesSelect = [
    {label: "Chevrolet",value:"Chevrolet"},
    {label: "Ferrari",value:"Ferrari"}
 ]

const handleSelectChange =  ({value})=>{
    value
}


 const   [images,SetImagesMode] = useState(Sun) 
 const HandleImageChange =()=>{
     if(images ==Sun){
        
          SetImagesMode(Moon)
     }else{
       
         SetImagesMode(Sun)
         
     }
 
     
 
 }





  return (
    <div id={images==Sun?'body-Display-Vehicles-Sun':'body-Display-Vehicles'}>
      <Header image={Logo} filterName="Veiculos" categories={categoriesSelect} handleSelectChange={(e) =>handleSelectChange(e)} imageMode={images} HandleImageChange={HandleImageChange} menu="Menu"/>
    </div>
  )
}

export default VehicleStore
