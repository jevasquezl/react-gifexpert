import { useState, useEffect } from 'react';
// import {getGifs} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ( props ) => {
    const { category } = props;
    
    const { gifs, isloading } = useFetchGifs(category);

    // const [gifs, setGifs] = useState([]);

    // useEffect(() => {
    //     getGifs(category).then(setGifs);
    // }, [category]);

    return (
        <>
            <p>{ category }</p>
            {
                isloading && <h2>Cargando...</h2>
            }
            {/* <h3>{isloading ? 'Cargando...' : ''}</h3> */}   
            <GifItem gifs={gifs} />
        </>
    )
}
