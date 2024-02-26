import BagItems from "../components/BagItems";
import BagsSummary from "../components/BagsSummery";
import {useSelector} from "react-redux"

function Bags() {
  const items = useSelector(store => store.items);
    return <>
  <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItems item={items[0]} />
        </div>
        <div className="bag-summary">
          <BagsSummary />
        </div>
      </div>
    </main>
  </>;
}

export default Bags;