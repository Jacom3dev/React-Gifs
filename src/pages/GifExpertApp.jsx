import React ,{useState} from 'react';
import AddCategory from '../components/AddCategory';
import GridCategory from '../components/GridCategory';


const GifExpertApp = () => {
  const [category,setCategory]= useState('goku');
  return (
    <div className='container'>
      <h3 className='title'>Search {category}</h3>
      <AddCategory  setCategory={setCategory} />
      <GridCategory cant={12} category={category}/>
    </div>
  )
}

export default GifExpertApp;