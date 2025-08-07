import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';


// const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&limit=10`;


// const peticion = fetch(url);


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
   
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

  return (
    <>
        <h1>GifExpertApp3</h1>

        <AddCategory onNewCategory = { onAddCategory } />

        {
            categories.map((category) => (                
                <GifGrid key = {category} category= {category} />
            ))
        }

    </>
    )
}
