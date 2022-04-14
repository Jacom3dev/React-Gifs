import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useGetGifs = (cant,category) => {
    const [state, setstate] = useState({
        images:[],
        loading:false
    })
    
    useEffect(() => {
        setstate({
            images:[],
            loading:false
        })
        getGifs(category,cant)
          .then(imgs=>{
              setTimeout(() => {
                  setstate({
                      images:imgs,
                      loading:true
                  })
              }, 1000);
          })
    }, [cant,category])
    return state;
}
