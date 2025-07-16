import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-orange-500 text-center px-4">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2 text-orange-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
