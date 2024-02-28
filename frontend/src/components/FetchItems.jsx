
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import {fetchStatusActions} from "../store/fetchStatusSlice"


function FetchItems() {

  const fetchStatus = useSelector(store => store.fetchStatus);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    if(fetchStatus.fetchDone) return;
    
    const controller = new AbortController();
    const single = controller.signal;

    dispatch(fetchStatusActions.markFetching());
    
    fetch('http://localhost:8080/items', {single})
    .then(res => res.json())
    .then(({items}) => {
      
      dispatch(itemsActions.addInitialItems(items[0]));
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
    });
    
    
  }, [fetchStatus])
  return <>
  <div>
  
  </div>
  </>;
}

export default FetchItems;