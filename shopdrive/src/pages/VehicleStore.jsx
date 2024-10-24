import { useEffect, useState } from 'react'
import "../index.css"
import "../css/VehicleStore.css"
import "../css/main.css"
import Header from  "../components/header/Header"
import SliderOffer from '../components/sliderOffer/Slider'
import Logo from "../assets/img/logobluecar.jpg"
import Sun from "../assets/img/sun.png"
import Moon from "../assets/img/half-moon.png"
import {register} from "swiper/element/bundle"


// IMPORTS PARA O SWIPER!!
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
// ////////////////////// //


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
        <main id='principal-Section-View'>
          <SliderOffer/>
        </main>
    </div>
  )
}

export default VehicleStore
