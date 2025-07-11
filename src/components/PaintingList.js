import {useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const PaintingList = () => {
    const [paintings, setPaintings] = useState([]);
    const [query, setQuery] = useState("");

    // Inside component
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get("https://backend-e0sb.onrender.com/paintings")
            .then(res => setPaintings(res.data))
            .catch(err => console.error(err));
    },[])

    const filteredPaintings = paintings.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <SearchBar setQuery={setQuery} />
            {filteredPaintings.map(painting =>(
                <div key={painting._id}>
                    <h3>{painting.title}</h3>
                    <img src={painting.imageUrl} alt={painting.title} />
                    <p>${painting.price}</p>
                    {/* Inside each painting card: */}
                    <button onClick={() => dispatch(addToCart(painting))}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default PaintingList;