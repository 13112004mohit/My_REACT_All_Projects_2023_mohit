import React from 'react'
import { useFilterContext } from '../context/filter_context';

const FilterSection = () => {

   const {filters:{text,category}, updateFilterValue, all_products} = useFilterContext();

  //  TOGET UNIQUE DATA OF EACH FIELDS

    const getUniqueData = (data,category) =>{
      let newVal = data.map((curElem)=>{
        return curElem[category];
      });
      // for unique value using set 
    return  newVal = ["All", ...new Set(newVal)];
    };   
      
    // // WE NEED UNIQUE DATA        //  
    const categoryOnlyData = getUniqueData(all_products,"category");
      
      
         
  return (
    <>
       <div className="filter_search">
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
            <input placeholder='Search' type="text" name="text" value={text} onChange={updateFilterValue} />
        </form>
       </div>

{/* category */}
     <div className="filter_category_field">
        <h3>Category</h3>
        <div> 
          {
            categoryOnlyData.map((curElem,index)=>{
              return <button 
                        key={index} 
                        type="button" 
                        name="category" 
                        onClick={updateFilterValue}
                        value={curElem}
                        >
                          {curElem}
                        </button> 
            })
          }
        </div>
     </div>
    </>
  )
}

export default FilterSection