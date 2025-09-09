import { useContext, useState } from "react";
import "../../style/AddPostPage.css";
import { UserContext } from "../../context/User.context";

export default function AddPost() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const { user } = useContext(UserContext);

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };
  {
    /* fetch on sumbit to send the post*/
  }
  const handleSumbit = (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    if (selectedImage) {
      formData.append("image", selectedImage, selectedImage.name);
    }
    formData.append("description", description);
    if (user) {
      formData.append("userId", user.id.toString());
      formData.append("username", user.name);
    }

    fetch("http://localhost:3000/api/post/image", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => console.log("Upload successful:", response))
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
