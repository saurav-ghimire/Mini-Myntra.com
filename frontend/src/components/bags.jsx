import Footer from "./components/Footer"
import Header from "./components/Header"


function Bags() {
  return <>
  <Header />
  <main>
      <div className="bag-page">
        <div className="bag-items-container">
        </div>
        <div className="bag-summary">
        </div>
      </div>
    </main>
    <Footer />
  </>;
}

export default Bags;