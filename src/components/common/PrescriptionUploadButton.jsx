// PrescriptionUploadButton.js
import React, { useState } from 'react';
import PrescriptionUpload from '../forms/PrescriptionUpload';

const PrescriptionUploadButton = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleForm} className="btn btn-primary cursor-pointer border-1 border-[#08fcfcfa] text-[#08fcfcfa] rounded-full px-4 py-1">
        Upload Prescription
      </button>
      {showForm && <PrescriptionUpload />}
    </div>
  );
};

export default PrescriptionUploadButton;
