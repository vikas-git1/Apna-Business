import React from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
        Business Profile
      </h2>
      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Owner Name:</strong> {profile.ownerName}
        </p>
        <p>
          <strong>Business Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Category:</strong> {profile.category}
        </p>
        <p>
          <strong>Description:</strong> {profile.description}
        </p>
        <p>
          <strong>Contact:</strong> {profile.contact}
        </p>
        <p>
          <strong>Address:</strong> {profile.address}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
