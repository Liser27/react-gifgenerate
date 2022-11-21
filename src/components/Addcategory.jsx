import { useState } from 'react';

export const Addcategory = ({onNewValue}) => {
  const [inputValue, setinputValue] = useState('')
  
  const OnInputChanged= ({target})=>{

    setinputValue(target.value);
  }
    
  const onsubmit= (event)=> {
    event.preventDefault();
    if (inputValue.trim().length<=1) return;
    //onAddcategory( categories =>[ inputValue,...categories ]);
    
    onNewValue(inputValue.trim());
    setinputValue('');

  }
  return (
    <form onSubmit={ onsubmit}>
    <input
    
     type="text"
     placeholder="buscar gifs"
     value={inputValue}
     onChange={OnInputChanged}

    />
    </form>
  )
}
