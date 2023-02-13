import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context'
import '../style/productPage.css'

const Sort = () => {

  const { filter_products,product_View, setGridView,setListView ,sorting} = useFilterContext();

  return (
    <>
      <div className="sorting_flex">
        {/* short button grid and list */}
        <div className="sorting_list_flex">
            <button 
              className={product_View ? "sorting_products_btn sortactive" : "sorting_products_btn"}
              onClick={setGridView}
              >
                <BsFillGridFill className='sorting_BTNicon_grid' />
            </button>
            <button 
            className={product_View ? "sorting_products_btn " : "sorting_products_btn sortactive"}
            onClick={setListView}
            >
               <BsList className='sorting_BTNicon_list' />
            </button>
        </div>

{/* total products  */}
        <div className="productlength">{`${filter_products.length} products Avaliable`}</div>

{/* dropDown shorting */}
        <div className="droupdown">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort"  className='shortselected'
             onClick={sorting}
             >
                <option value='lowest'>Price(Low-High)</option> 
                <option value='' disabled></option> 
                <option value='highest'>Price(High-Low)</option> 
                <option value='' disabled></option> 
                <option value='a-z'>product(a-z)</option> 
                <option value='' disabled></option> 
                <option value='z-a'>product(z-a)</option> 
            </select>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sort;