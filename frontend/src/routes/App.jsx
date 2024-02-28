import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItems from "../components/FetchItems"
import Loader from "../components/Loader"
import { useSelector } from "react-redux"

function App() {
  
  const fetchStatus = useSelector(store => store.fetchStatus);
  
  return (
    <>
    <Header />
    {fetchStatus.currentlyFetching ? <Loader /> : ""}
      
      <FetchItems />
      <Outlet></Outlet>
    <Footer />
    </>
  )
}

export default App
