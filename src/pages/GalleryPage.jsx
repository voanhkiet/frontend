import {useEffect, useState} from "react";
import axios from "axios";
import "./GalleryPage.css"


function GalleryPage(){
 const [paintings,setPaintings] = useState([]);

 useEffect(()=>{
  axios.get("https://backend-ybh5.onrender.com/paintings")
  .then((response)=>setPaintings(response.data))
  .catch((error)=>console.error("Error fetchin paintings:", error));
 },[]);
 return(
  <div className="painting-container shadow-lg p-4">
    <h1>Gallery 🖼️</h1>
    <ul className="painting-gallery">
      {paintings.map((painting)=>(
        <li className="painting-card" key={painting._id}>
          <h3>{painting.title}</h3>
          <img loading="lazy" className="w-full h-48 object-cover" src={painting.image} alt={painting.title} />
          <h2 className="mt-2 font-bold">{painting.title}</h2>
          <p className="text-gray-600">Price: ${painting.price}</p>

        </li>
      ))}
    </ul>
  </div>
  );
}


export default GalleryPage;
