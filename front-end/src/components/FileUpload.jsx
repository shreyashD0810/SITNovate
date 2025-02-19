import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please upload a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      onFileUpload(data); // Pass processed data to parent component
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload Dataset</h2>
      <input type="file" accept=".csv, .xlsx" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload and Process</button>
    </div>
  );
};

export default FileUpload;