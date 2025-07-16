import React, { useState, useEffect } from "react";
import business from "../data/business.json";
import ServiceCard from "../components/ServiceCard";
import { FaChevronDown } from "react-icons/fa";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const categories = [
    "Select Category",
    "Food",
    "Travel",
    "Education",
    "Salon",
    "Vegetable",
    "Repair Services",
    "Medical",
    "Clothing",
    "Electronics",
    "Stationery",
  ];

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();

    if (term === "" && category === "Select Category") {
      setFilteredBusinesses([]);
      setShowResults(false);
      return;
    }

    const filtered = business.filter((item) => {
      const matchesCategory =
        category === "Select Category" ||
        item.category.toLowerCase() === category.toLowerCase();

      const matchesSearch =
        term === "" || item.name.toLowerCase().includes(term); // ✅ Only business name match

      return matchesCategory && matchesSearch;
    });

    setFilteredBusinesses(filtered);
    setShowResults(true);
  }, [searchTerm, category]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 py-10 px-6">
      <div className="w-full max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-lg mb-12">
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-4">
          Find Local Services Easily
        </h1>
        <p className="text-gray-600 text-center text-lg mb-8">
          Search for businesses like salons, food delivery, repairs, and more
          near you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Category Dropdown */}
          <div className="relative w-full md:w-1/4">
            <select
              className="w-full border border-gray-300 p-4 rounded appearance-none text-base pr-10"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by business name"
            className="flex-1 w-full md:w-2/4 border border-gray-300 p-4 rounded text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Results */}
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-2">
        {showResults ? (
          filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((biz, i) => (
              <ServiceCard key={i} business={biz} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No services found.
            </p>
          )
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Use the category or search bar above to find services.
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
