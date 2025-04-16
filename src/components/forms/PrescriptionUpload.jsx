// PrescriptionUpload.js
import React, { useState } from 'react';

const PrescriptionUpload = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    file: null,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      privacyPolicy: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., API call)
    console.log('Form Data:', formData);
  };

  return (
    <div className="prescription-upload-form">
      <h1>Upload Your Prescription</h1>
      <p>Please upload your prescription below and our customer service representatives will get in touch with you shortly</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="+254 (555) 000-0000"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          onChange={handleFileChange}
        />
        <label>
          <input
            type="checkbox"
            checked={formData.privacyPolicy}
            onChange={handleCheckboxChange}
          />
          Agree to Privacy Policy
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PrescriptionUpload;
