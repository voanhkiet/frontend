import {useEffect, useState} from "react";
import axios from "axios";
import "./GalleryPage.css"
import Modal from "react-modal"; // Import modal package
Modal.setAppElement("#root"); // Required for accessibility

function GalleryPage(){
 const [paintings,setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);
 useEffect(()=>{
  axios.get("https://backend-ybh5.onrender.com/paintings")
  .then((response)=>setPaintings(response.data))
  .catch((error)=>console.error("Error fetchin paintings:", error));
 },[]);

   const openModal = (painting) => {
    setSelectedPainting(painting);
  };

  const closeModal = () => {
    setSelectedPainting(null);
  };
  const handleNext = () => {
  const currentIndex = paintings.findIndex((p) => p._id === selectedPainting._id);
  const nextIndex = (currentIndex + 1) % paintings.length;
  setSelectedPainting(paintings[nextIndex]);
};

const handlePrev = () => {
  const currentIndex = paintings.findIndex((p) => p._id === selectedPainting._id);
  const prevIndex = (currentIndex - 1 + paintings.length) % paintings.length;
  setSelectedPainting(paintings[prevIndex]);
};

 return(
  <div className="painting-container shadow-lg p-4">
    <h1>Gallery 🖼️</h1>
    <ul className="painting-gallery">
      {paintings.map((painting)=>(
        <li className="painting-card" key={painting._id} onClick={()=>openModal(painting)} loading="lazy" >
          <h2 className="mt-2 font-bold">{painting.title}</h2>
          <img loading="lazy" className="w-full h-48 object-cover" src={painting.image} alt={painting.title} />
          <h2 className="mt-2 font-bold">{painting.title}</h2>
          <p className="text-gray-600">Price: ${painting.price}</p>

        </li>
      ))}
    </ul>
     {/* Lightbox Modal */}
      <Modal isOpen={selectedPainting !== null} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
        {selectedPainting && (
          <div className="flex flex-col items-center">
            <button className="nav-btn left" onClick={handlePrev}>⬅️ Prev</button>
            <img src={selectedPainting.image} alt={selectedPainting.title} className="max-w-full max-h-full object-contain" />
            <button className="nav-btn right" onClick={handleNext}>Next ➡️</button>
            <h2 className="mt-4 text-xl font-bold">{selectedPainting.title}</h2>
            <p className="text-gray-600">${selectedPainting.price}</p>
            <button onClick={closeModal} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
          </div>
        )}
      </Modal>
  </div>
  );
}


export default GalleryPage;
