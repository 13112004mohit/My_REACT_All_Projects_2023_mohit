import React from 'react'
import ProductList from '../components/ProductList';
import FilterSection from '../components/FilterSection';
import Sort from '../components/Sort';
import '../style/productPage.css'

const Product = () => {


  return (
    <>
    {/* main product container */}
      <div className="Product_main_container_flex_two_column">
        {/* fist column filter section */}
        <div className='first_filter_container'>
          <FilterSection/>
        </div>

        {/* second column sorting and product section section */}
         <section className="second_product_container">
          <div className="sort_filter">
            <Sort/>
          </div>

          <div className="main_product">
            <ProductList/>
          </div>
         </section>
      </div>
    </>
  )
}

export default Product;