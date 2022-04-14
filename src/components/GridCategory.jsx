import React from 'react';
import { useGetGifs } from '../hooks/useGetGifs';
import GridItem from './GridItem';

const GridCategory = ({cant,category}) => {

    
   const {images,loading} = useGetGifs(cant,category);
    
   
    
    return (
        <div className='card-grid'>
            {loading
            ?
                images?.map((img)=>{
                    return <GridItem key={img.id} {...img} />
                })
            : 
                <div>Cargando....</div>
            }
        </div>
    )
}

export default GridCategory;