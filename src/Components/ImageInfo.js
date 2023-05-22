import React from "react";

const ImageInfo = ({clickedImage}) => {



    return(
        <div>
             <p>{clickedImage.name}</p>
        </div>
    )
}

export default ImageInfo;