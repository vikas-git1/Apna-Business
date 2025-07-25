import React, { useState } from "react";
import { auth, db } from "../Auth/firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function RegisterBusiness() {
  const [ownerName, setOwnerName] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  //   setPreview(URL.createObjectURL(file));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      if (user) {
        await setDoc(doc(db, "businesses", user.uid), {
          email: user.email,
          ownerName: ownerName,
          name: name,
          category: category,
          address: address,
          contact: contact,
          description: description,
        });
      }
      console.log("User Registered and details stored  successfully ", user);
      alert("Business Registered Successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error in Registration :", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          Register Your Business
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Business Owner Name"
            className="w-full border border-gray-300 p-3 rounded"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Business Name"
            className="w-full border border-gray-300 p-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Business Category (e.g., food, travel)"
            className="w-full border border-gray-300 p-3 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <textarea
            placeholder="Short Description"
            className="w-full border border-gray-300 p-3 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Contact Number"
            className="w-full border border-gray-300 p-3 rounded"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Business Address"
            className="w-full border border-gray-300 p-3 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* <label className="block font-medium text-gray-700">
            Upload Business Image
          </label>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-3 rounded"
          /> */}

          {preview && (
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded shadow-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
          >
            Register Business
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterBusiness;
