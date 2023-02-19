import React from 'react'
import { FaCheck } from 'react-icons/fa';
import '../style/productPage.css'
import { useFilterContext } from '../context/filter_context';
import FormatPrice from '../Helpers/FormatPrice';

const FilterSection = () => {

   const {filters:{text,category,colors,price,maxPrice,minPrice}, updateFilterValue, all_products, clearFilter} = useFilterContext();

  //  TOGET UNIQUE DATA OF EACH FIELDS

    const getUniqueData = (data,attribute) =>{
      let newVal = data.map((curElem)=>{
        return curElem[attribute];
      });
      // for unique value using set 
      if(attribute === "colors"){
        // newVal = newVal.flat();
        return (newVal =  ["All", ...new Set([].concat(...newVal))]);
      }
      else{
        return  newVal = ["All", ...new Set(newVal)];
      }
    };   
      
    // // WE NEED UNIQUE DATA        //  
    const categoryOnlyData = getUniqueData(all_products,"category");
    const companyData = getUniqueData(all_products,"company");
    const colorsData = getUniqueData(all_products,"colors");
      
      
         
  return (
    <>
    {/* search */}
       <div className="filter_search">
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
            <input placeholder='Search' 
                   className='search_items_product'
                   type="text" 
                   name="text" 
                   value={text} 
                   onChange={updateFilterValue} />
        </form>
       </div>

{/* category */}
     <div className="filter_category_field">
        <h3>Category</h3>
        <div className='filter_category_data'> 
          {
            categoryOnlyData.map((curElem,index)=>{
              return <button 
                        key={index} 
                        type="button" 
                        name="category" 
                        onClick={updateFilterValue}
                        value={curElem}
                        className={category === curElem ? "product_caterory_button active_category" : "product_caterory_button"} 
                        >
                          {curElem}
                        </button> 
            })
          }
        </div>
     </div>

     {/* company */}
     <div className="filter_company">
      <h3>Company</h3>
   
      <form action="#" >
        <select name="company" id="company" className='filter_company_data'
                onClick={updateFilterValue} 
        >
         {
           companyData.map((curElem,index)=>{
            return (
              <option value={curElem} 
                      name="company" 
                      key={index} 
              >
                {curElem}
              </option>
            )
           })
         }               
        </select>
      </form>
     </div>

     {/* Colors */}
     <div className="filter_colors">
      <h3>Colors</h3>

      <div  className='colors'>
           {
            colorsData.map((curColor,index)=>{
              if(curColor === 'All'){
                return(
                  <button  type="button"
                          name="colors"
                           className={colors === curColor ? "product_caterory_button active_category" : "product_caterory_button"} 
                          //  style={{backgroundColor:curColor }} 
                           onClick={updateFilterValue} 
                           value={curColor}
                           key={index}
                  >All
                  </button>
                )
              }
              return(
                <button  type="button"
                className={colors === curColor ? "btnStyle active" : "btnStyle"} 
                         style={{backgroundColor:curColor }} 
                         onClick={updateFilterValue} 
                         value={curColor}
                         name="colors"
                         key={index}
                >
                {
                  colors === curColor ? <FaCheck className='checkcolor'/> :  null 
                }  
                </button>
              )
            })
           }   
      </div>
     </div>


     {/* price filter */}

     <div className="filter_price">

      <h3>Price</h3> <br />
      <FormatPrice price={price} /> <br />
      <input type="range" 
             className='product_range'
             name="price" 
             min={minPrice} 
             max={maxPrice} 
             value={price} 
             onChange={updateFilterValue} 
      />

     </div>

     {/* clear filter */}

     <div className="filter_clear">
       <button  
           className='filter_clear_button' 
           onClick={clearFilter} 
       >Clear All
       </button>
     </div>

    </>
  )
}

export default FilterSection