import { useState } from "react";
import "../../style/AddPostPage.css";

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
    <div className="add-post-page">
      <h1>Upload a Post</h1>
      <form className="form-add">
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
  );
}
