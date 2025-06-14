import React, {useEffect, useState} from "react";
import "./HomePage.css";
const HomePage = () => {
  const [paintings, setPaintings] = useState([]);
  const [filteredPaintings, setFilteredPaintings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");



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
  const handleSearchChange =(event) =>{
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredPaintings(
      paintings.filter((painting) => painting.title.toLowerCase().includes(query)
      )
    );
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);

    let sortedPaintings = [...filteredPaintings];

    if (order === "price-low-high") {
      sortedPaintings.sort((a, b) => a.price - b.price);
    } else if (order === "price-high-low") {
      sortedPaintings.sort((a, b) => b.price - a.price);
    } else if (order === "name-a-z") {
      sortedPaintings.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === "name-z-a") {
      sortedPaintings.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredPaintings(sortedPaintings);
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

       {/* Sorting Dropdown */}
      <select onChange={handleSortChange} className="mt-4 p-2 border rounded">
        <option value="default">Sort by...</option>
        <option value="price-low-high">Price (Low to High)</option>
        <option value="price-high-low">Price (High to Low)</option>
        <option value="name-a-z">Name (A-Z)</option>
        <option value="name-z-a">Name (Z-A)</option>
      </select>

  {/* Search Bar */}
      <input
        type="text"
        placeholder="Search paintings..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mt-4 p-2 border rounded w-full"
      />

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
