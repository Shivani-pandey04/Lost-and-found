import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sample items (later you can fetch these from backend)
  const items = [
    { title: "Black Wallet", description: "Lost near library" },
    { title: "Headphones", description: "Blue color, found in cafeteria" },
    { title: "Water Bottle", description: "Transparent bottle" },
  ];

  // Filtering logic
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()) ||
    item.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="search-page">
      
      <h2 className="search-title">Search Lost & Found Items</h2>

      {/* ▸ Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search items..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* ▸ Item Cards */}
      <div className="item-list">
        {filteredItems.map((item, index) => (
          <div key={index} className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* ▸ Dropdown Menu */}
      <div className="dropdown">
        <button 
          className="dropbtn" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          New Query ▼
        </button>

        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="/report-lost"> Report Lost Item</a>
            <a href="/report-found">  Report Found Item</a>
          </div>
        )}
      </div>
    </div>
  );
}
