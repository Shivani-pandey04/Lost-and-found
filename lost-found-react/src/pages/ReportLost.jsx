import { useState } from "react";
import "./ReportLost.css";

export default function ReportLost() {
  const [formData, setFormData] = useState({
    item: "",
    description: "",
    location: "",
    phone: "",
    name: "",
    date: "",
    photo: null
  });

  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.item ||
      !formData.description ||
      !formData.location ||
      !formData.phone ||
      !formData.name ||
      !formData.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Phone number must be 10 digits.");
      return;
    }

    setSuccess(true);

    // Clear form after submit
    setFormData({
      item: "",
      description: "",
      location: "",
      phone: "",
      name: "",
      date: "",
      photo: null
    });
  };

  return (
    <div className="lost-form-page">

      <h2 className="form-title">Report Lost Item</h2>

      <form className="lost-form" onSubmit={handleSubmit}>

        <label>Item Name:</label>
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Enter lost item name"
          required
        />

        <label>Upload Photo:</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe color, brand, unique marks..."
          required
        ></textarea>

        <label>Location Lost:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Library, Cafeteria"
          required
        />

        <label>Phone No:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter 10-digit number"
          required
        />

        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Date Lost:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn submit-btn">Submit Report</button>
      </form>

      {/* Success Popup */}
      {success && (
        <div className="popup">
          <div className="popup-box">
            <p>Lost Item Report Submitted Successfully ✔</p>
            <button className="close-btn" onClick={() => setSuccess(false)}>
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
