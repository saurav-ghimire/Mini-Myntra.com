
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";


function FetchItems() {

  const fetchStatus = useSelector(store => store.fetchStatus)
  const dispatch = useDispatch();

  if(fetchStatus.fetchDone) return;

  const controller = new AbortController();
  const single = controller.signal;
  useEffect(() => {
    fetch('http://localhost:8080/items', {single})
    .then(res => res.json())
    .then(({items}) => {
      dispatch(itemsActions.addInitialItems(items));
    });

    return() => {
      console.log("Cleaning up use effect in items");
      controller.abort();
    }
  }, [fetchStatus])

  return <>
  <div>
  
    Fetch Done : {fetchStatus.fetchDone}
    Currently Fetching : {fetchStatus.currentlyFetching}
  </div>
  </>;
}

export default FetchItems;