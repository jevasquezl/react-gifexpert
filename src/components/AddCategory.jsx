import { useState } from "react";


// export const AddCategory = ({setCategories}) => {

//     const [inputValue, setInputValue] = useState('');
    
//     const OnInputChange = (newCategory) => {
//         if (newCategory.trim().length < 0) return;
//         setInputValue(newCategory.trim());
//     }

//     const onSumit = (event) => {
//         event.preventDefault();

//         if (inputValue.trim().length <= 1) return;
//         setCategories(categories => [inputValue, ...categories]);
//         setInputValue('');
// }

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const OnInputChange = (newCategory) => {
        if (newCategory.trim().length < 0) return;
        setInputValue(newCategory.trim());
    }

    const onSumit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());

        setInputValue('');
        
    }    

  return (
    <form onSubmit={(event) => onSumit(event)}>
        <input
            type="text"
            placeholder="Buscar gifs"
            onChange={(event) => OnInputChange(event.target.value)}
            value={inputValue}
            autoComplete="off"
            autoFocus={true}
        />
   </form>
  )
}

        // onKeyPress={(event) => {
        // if (event.key === 'Enter') {
        //     onNewCategory(inputValue.trim());
        //     setInputValue('');
        // }
        // }}