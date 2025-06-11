import {useEffect, useState} from "react";
import axios from "axios";
import "./GalleryPage.css"


function GalleryPage(){
 const [paintings,setPaintings] = useState([]);

 useEffect(()=>{
  axios.get("http://localhost:5000/paintings")
  .then((response)=>setPaintings(response.data))
  .catch((error)=>console.error("Error fetchin paintings:", error));
 },[]);
 return(
  <div>
    <h1>Gallery 🖼️</h1>
    <ul className="painting-gallery">
      {paintings.map((painting)=>(
        <li className="painting-card" key={painting._id}>
          <h3>{painting.title}</h3>
          <img className="rounded-lg shadow-lg hover:scale-105 transition" src={painting.image} alt={painting.title} />
          <p>Price: ${painting.price}</p>
        </li>
      ))}
    </ul>
  </div>
  );
}


export default GalleryPage;
