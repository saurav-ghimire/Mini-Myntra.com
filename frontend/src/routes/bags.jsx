import BagsSummary from "../components/BagsSummery";


function Bags() {
  return <>
  <main>
      <div className="bag-page">
        <div className="bag-items-container">
        </div>
        <div className="bag-summary">
          <BagsSummary />
        </div>
      </div>
    </main>
  </>;
}

export default Bags;