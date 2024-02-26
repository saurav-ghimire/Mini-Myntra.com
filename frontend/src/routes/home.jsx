import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItem"


function Home() {
  const items = useSelector(store => store.items);
   
  return <>
  <main>
        <div className="items-container">
          {items.map((data) => (
            <HomeItems key={data.id} item={data}/>            
            ))}
        </div>
    </main>
  </>;
}

export default Home;