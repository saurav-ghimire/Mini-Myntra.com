import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { bagsActions } from "../store/bagsSlice";

function HomeItems({item}) {
  const bagsItem = useSelector((store) => store.bags);

  const isOnBag = bagsItem.indexOf(item.id) >= 0;
  
  
  const dispatch = useDispatch();

  const handleAddToBags = (item) => {
    dispatch(bagsActions.addToBag(item.id));
  }

  const handleRemove = () => {
    dispatch(bagsActions.removeFromBag(item.id));
  }
  return <>

    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
      {
        !isOnBag ? <button className="btn-add-bag" onClick={() => handleAddToBags(item)}><IoMdAddCircleOutline /> Add to Bag</button>  : <button className="btn-add-bag btn btn-danger" onClick={handleRemove}> <MdDelete /> Remove</button>
      }
      

    </div>

  </>;
}

export default HomeItems;