import { useEffect, useState } from "react";
import { getgifs } from "../helpers/getgifs";

export const useFetchGifs = (category) => {
  
    const [images, setimages] = useState([]);
    const [Isloading, setIsloading] = useState(true)
  const getImages= async()=>{
     const newImages= await getgifs(category);
     setimages(newImages);
     setIsloading(false)

  }
  useEffect(()=>{
   getImages();

  },[])
    return{

        images ,
        Isloading
    }
}
