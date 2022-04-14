import React, {useState} from 'react';

const AddCategory = ({setCategory}) => {
   
    const [category, setcategory] = useState('')
    const handleOnchange = (e)=>{
        setcategory(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (category.trim() !="") {
            setCategory(category)
            setcategory('')
        }
    }
    return (
        <div className="cont-add">
            <form onSubmit={handleSubmit}>
                <input type="text" value={category} onChange={handleOnchange} placeholder="Buscar"/>
            </form>
        </div>
       
    )
}

export default AddCategory;