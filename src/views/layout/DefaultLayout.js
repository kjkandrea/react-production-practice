import Header from '../../components/global/Header'
import Footer from '../../components/global/Footer'

const DefaultLayout = props => {
  const Page = props.page

  const setItems = items => {
    console.log(items)
  }

  return (
    <>
      <Header setItems={setItems} />
      <Page/>
      <Footer/>
    </>
  )
}

export default DefaultLayout;