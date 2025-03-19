import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../redux/slices/ProductsSlice';

const ProductList = () => {

const dispatch = useDispatch();

const {items} = useSelector((state)=> state.products)

const [productsList, setProductList] = useState([]);
console.log('productsList',productsList)
useEffect(()=>{
dispatch(fetchproducts())
},[dispatch])

useEffect(()=>{
setProductList(items)
},[items])

  return (
    <div>
      <h2>productList</h2>
    </div>
  )
}

export default ProductList