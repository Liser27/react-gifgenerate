
import React, { useState } from "react";
import { Addcategory, GifGrid } from "./components";
export const GifExpertapp= ()=>{
    
    const [categories, setCategories]=useState([]);
     const Handdlerefresh=() => setCategories([]);
    const onAddcategory= (newCategory)=>{
         if(categories.includes(newCategory)) return;
     
        setCategories([newCategory,...categories]);
          
     //categories.push(newCategory);
    }  
    
    return(
        <>

        <h1>GifExpertApp</h1>
        
         <Addcategory 
         //onAddcategory={setCategories} 
         
         onNewValue={ (value) => onAddcategory(value) }
         />
<button onClick={Handdlerefresh}>Refresh</button>

        
        {
        categories.map(category =>( 
                <GifGrid key={category} category={category}/>
                )
        )}
    
        
        </>
    
    )



}