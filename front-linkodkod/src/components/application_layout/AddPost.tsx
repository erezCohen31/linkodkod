import { useState } from "react";

export default function AddPost() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSumbit = () => {
    const formData = new FormData();
    if (selectedImage) {
      formData.append("image", selectedImage, selectedImage.name);
    }
    formData.append("description", description);

    fetch("http://localhost:3000/api/post/image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log("Upload successful:", data))
      .catch((error) => console.error("Upload failed:", error));
  };
  return (
    <>
      <h1>Upload an Image</h1>
      <div className="form-add">
        <form>
          <input
            id="text"
            name="text"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="enter your description"
            required
          />
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleSumbit}>Share it</button>
        </form>
      </div>
    </>
  );
}
