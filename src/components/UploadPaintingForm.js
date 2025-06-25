import { useState } from "react";

const UploadPaintingForm = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");const [showLoginWarning, setShowLoginWarning] = useState(false);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("https://backend-e0sb.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImageUrl(data.imageUrl); // ✅ Cloudinary image URL
  };

  const submitPainting = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    setShowLoginWarning(true);
    return;
  }

  try {
    const res = await fetch("https://backend-e0sb.onrender.com/paintings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, price, imageUrl })
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to create painting.");
    }

    alert("✅ Painting created!");
    setTitle("");
    setPrice("");
    setImage(null);
    setImageUrl("");
    setShowLoginWarning(false);
  } catch (error) {
    console.error("Error submitting painting:", error);
    alert("❌ Failed to create painting: " + error.message);
  }
};


  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Add a Painting</h2>
    {showLoginWarning && (
        <p style={{ color: "red" }}>Please log in to create a painting.</p>)}
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <br />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <br />
      <input type="file" onChange={handleImageChange} />
      <br />
      <button onClick={uploadImage}>Upload Image</button>
      {imageUrl && (
        <>
          <img src={imageUrl} alt="preview" style={{ width: "100%", margin: "1rem 0" }} />
          <button onClick={submitPainting}>Create Painting</button>
        </>
      )}
    </div>
  );
};

export default UploadPaintingForm;
