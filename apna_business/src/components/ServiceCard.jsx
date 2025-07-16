import React from "react";

function ServiceCard({ business }) {
  const {
    name,
    category,
    description,
    contact,
    address,
    email,
    image,
  } = business;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-3xl mx-auto my-4 border border-gray-200">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">{name}</h2>
        <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
        <p className="text-gray-700 mb-3">{description}</p>

        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-semibold">Contact:</span> {contact}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p><span className="font-semibold">Address:</span> {address}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
