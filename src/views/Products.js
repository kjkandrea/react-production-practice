import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

const Products = () => {
  const setItems = items => {
    console.log(items)
  }

  return (
    <>
      <Header setItems={setItems} />
      <h1>아이템 내놔</h1>
      <Footer/>
    </>
  )
}

export default Products;