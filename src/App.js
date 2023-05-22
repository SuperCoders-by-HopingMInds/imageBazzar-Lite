
import React, {useState} from "react";
import CreateGallery from "./Components/CreateGallery";
import ImageInfo from "./Components/ImageInfo";


const App = () => {
   const [clickedImage, setClickedImage] = useState("");
     

    return(
        <div>
              <CreateGallery addClickedImage={setClickedImage} />  
              <ImageInfo  clickedImage={clickedImage}/>
        </div>
    )
}
export default App;



