import "../../index.css"
import "../../css/Header.css"
import Select from "react-select"
import "../../css/moon/moonHeader.css"
import "../../css/sun/sunHeader.css"

import Sun from "../../assets/img/sun.png"
import Moon from "../../assets/img/half-moon.png"
import { useState } from "react"
export default function Header({image,filterName,categories,handleSelectChange,HandleImageChange,imageMode,menu}){

     
  
    return(
        <header id={imageMode==Sun?"header-Component-Sun":"header-Component-Moon"}>
            <div id="group-Row-One">
            <div className="justify-Quality-Image" id="bg-Color-Black">
            <img src={image} alt="imagem da nossa logo" />
            </div>
            <div id="group-Column-One">
            <label htmlFor={filterName}>Carros</label>
            <Select id="select-Body-Style"  
                options={categories}
                onChange={handleSelectChange}
            
            
            
            />
                </div>
            
            </div>
            <div id={imageMode==Sun?"group-Row-Two-Sun":"group-Row-Two-Moon" }>
                
                    <div className="justify-Quality-Image" onClick={HandleImageChange} id="resize-Image-Two" >
                    <img src={imageMode} alt="" />
                    </div>
                    <menu id={imageMode==Sun?"menu-Button-Style-Sun":"menu-Button-Style-Moon"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </menu>
                

            </div>
        </header>
    )
}