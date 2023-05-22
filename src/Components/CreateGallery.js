import React from "react";
import imgData from "../data/imgData";


const CreateGallery = ({addClickedImage}) => {



      return(
        <div>
             <h1>Gallery</h1>
             {
                    imgData.map((img, index) => (
                        <img src={img.img_url} alt={img.alt} 
                         style={{width: "300px"}}
                         onClick={()=> addClickedImage(img)}
                        />
                    ))
             }
        </div>
      )
}

export default CreateGallery;



