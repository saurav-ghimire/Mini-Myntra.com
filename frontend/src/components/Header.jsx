import { IoPersonOutline, IoBagHandleOutline } from "react-icons/io5";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const bag = useSelector(store => store.bags);
    // console.log('bag container', bag)

  return <>
  <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="./images/myntra_logo.webp" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
            <Link to="/">Home</Link>
            <Link to="/bags">Bags</Link>
            <Link to="#">Kids</Link>
            <Link to="#">Home & Living</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
            <div className="action_container">
                <IoPersonOutline />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <FaRegFaceGrinHearts />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bags">
                <IoBagHandleOutline />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
  </>;
}

export default Header;