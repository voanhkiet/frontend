import React, {useEffect, useState} from "react";

const HomePage = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/paintings")
      .then((res) => res.json())
      .then((data) => setPaintings(data));
  }, [])
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome to the Painting Store 🎨</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {paintings.map((painting) => (
          <div key={painting.id} className="shadow-lg p-4">
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
