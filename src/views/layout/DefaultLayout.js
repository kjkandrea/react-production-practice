import Header from '../../components/global/Header'
import Footer from '../../components/global/Footer'

const DefaultLayout = props => {
  const Page = props.page
  return (
    <>
      <Header/>
      <Page />
      <Footer/>
    </>
  )
}

export default DefaultLayout;