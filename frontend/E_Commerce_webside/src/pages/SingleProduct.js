import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/productcontext';
import FormatPrice from '../Helpers/FormatPrice'
import PageNavigation from '../components/PageNavigation';
import MySingleProductImage from '../components/MySingleProductImage'
import { TbReplace, TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity, MdOutlineDeliveryDining } from 'react-icons/md'
import Star from '../components/Star'
import AddToCart from '../components/AddToCart'
import '../style/singleProduct.css'


const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  // here mere single product ke data ka destructured form aur yha id ka name Sid krdenge aapne convient ke liye
  const { id: Sid, name, image, company, price, description, category, stock, stars, reviews } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, []);

  if (isSingleLoading) {
    return <div>Loading....</div>
  }
  return (
    <>
      <PageNavigation title={name} />
      <div className="singlePgcontainer">
        <div className="grid_two_column">
          {/* Product image */}
          <div className="product_images">
            <MySingleProductImage imgs={image} />
          </div>

          {/* Product_data */}
          <div className="Product_data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product_data_price">
              MRP:<del> <FormatPrice price={price + 250000} /> </del>
            </p>
            <p className="product_data_real_price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p className='singlePDescription'>{description}</p>
            <div className="product_data_warrantys_details">
              <div className="product_warranty">
                <TbTruckDelivery className='product_warranty_icon' />
                <p>Free Delivery</p>
              </div>
              <div className="product_warranty">
                <TbReplace className='product_warranty_icon' />
                <p>30 Days Replacement</p>
              </div>
              <div className="product_warranty">
                <MdOutlineDeliveryDining className='product_warranty_icon' />
                <p>Cara Delivery</p>
              </div>
              <div className="product_warranty">
                <MdSecurity className='product_warranty_icon' />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product_data_info">
              <p>Available: <span>{stock ? "In Stock" : "Not Available"}</span> </p>
              <p>ID : <span>{id}</span></p>
              <p>Brand : <span>{company}</span></p>
            </div>
            <hr className='breakline' />

            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleProduct