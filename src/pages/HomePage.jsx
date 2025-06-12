import React, {useEffect, useState} from "react";
import "./HomePage.css";
const HomePage = () => {
  const [paintings, setPaintings] = useState([]);
  const [filteredPaintings, setFilteredPaintings] = useState([]);
  const [filter, setFilter] = useState("all");
  

  useEffect(()=>{
    fetch("https://backend-ybh5.onrender.com/paintings")
      .then((res) => res.json())
      .then((data) => setPaintings(data));
  }, [])

  useEffect(() => {
    fetch("https://backend-ybh5.onrender.com/paintings")
      .then((res) => res.json())
      .then((data) => {
        setPaintings(data);
        setFilteredPaintings(data);
      });
  }, []);

    const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    if (selectedFilter === "all") {
      setFilteredPaintings(paintings);
    } else if (selectedFilter === "under-150") {
      setFilteredPaintings(paintings.filter((painting) => painting.price < 150));
    } else if (selectedFilter === "above-150") {
      setFilteredPaintings(paintings.filter((painting) => painting.price >= 150));
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome to the Painting Store 🎨</h1>
      
      {/* Filter Dropdown */}
      <select onChange={handleFilterChange} className="mt-4 p-2 boder rounded">
        <option value="all">All Paintings</option>
        <option value="under-150">Under $150</option>
        <option value="above-150">Above $150</option>
      </select>

       {/* Painting Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {filteredPaintings.map((painting) => (
          <div key={painting._id} className="painting-container shadow-lg p-4">
            <img src={painting.image} alt={painting.title} className="w-full h-48 object-cover" />
            <h2 className="mt-2 font-bold">{painting.title}</h2>
            <p className="text-gray-600">${painting.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
