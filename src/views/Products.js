import { useState } from 'react'

import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import ProductList from '../components/product/list/List'

const Products = () => {
  const [ items, setItems ] = useState('');

  return (
    <>
      <Header setItems={setItems} />
        <h1>아이템 내놔</h1>
        <ProductList data={items} />
      <Footer/>
    </>
  )
}

export default Products;