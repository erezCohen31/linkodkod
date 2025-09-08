import { useState } from "react";

export default function AddPost() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSumbit = () => {
    fetch("http://localhost:3000/api/post/image", {
      method: "POST",
      body: selectedImage,
    })
      .then((response) => response.json())
      .then((data) => console.log("Upload successful:", data))
      .catch((error) => console.error("Upload failed:", error));
  };
  return (
    <>
      <h1>Upload an Image</h1>
      <form onSubmit={handleSumbit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && <p>Selected: {selectedImage.name}</p>}
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
