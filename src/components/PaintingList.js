import {useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

const PaintingList = () => {
    const [paintings, setPaintings] = useState([]);
    const [query, setQuery] = useState("");

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
                <div key={painting.id}>
                    <h3>{painting.id}</h3>
                    <img src={painting.imageUrl} alt={painting.title} />
                    <p>${painting.price}</p>
                </div>
            ))}
        </div>
    )
}

export default PaintingList;