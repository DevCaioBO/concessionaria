// IMPORTS SWIPER NO COMPONENTE SLIDE DE OFERTAS!

import { Swiper, SwiperSlide } from "swiper/react"
import "../../css/sliderOffer.css"

import grayCar from '../../assets/img/graycarOffer.jpg'
import redCar from '../../assets/img/redcarOffer.jpg'
import whiteCar from '../../assets/img/whitecarOffer.jpg'

export default function SliderOffer(){

        const objJson =[
            {id:"1" ,image:grayCar},
            {id:"2" ,image:redCar},
            {id:"3" ,image:whiteCar},
            

        ]

    return (
        <Swiper id="control-Swiper-Size"
            slidesPerView={1}
            pagination={{clickable:true}}
            navigation
        >
        {
            objJson.map((item)=>(
                <SwiperSlide key={item.id}  >
                    <img src={item.image} alt="item do slide" className="slide-child" />
                </SwiperSlide>
            ))
        }

            
        </Swiper>
    )

}