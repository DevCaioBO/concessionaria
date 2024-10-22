import "../../index.css"
import "../../css/Header.css"
import Select from "react-select"

import Sun from "../../assets/img/sun.png"
import Moon from "../../assets/img/half-moon.png"
import { useState } from "react"
export default function Header({image,filterName,categories,handleSelectChange,HandleImageChange,imageMode,menu}){

  
    return(
        <header id="header-Component">
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
            <div id="group-Row-Two">
                
                    <div className="justify-Quality-Image" onClick={HandleImageChange} >
                    <img src={imageMode} alt="" />
                    </div>
                    <p>{menu}</p>
                

            </div>
        </header>
    )
}