import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PdfUploader = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      toast.success("PDF file selected successfully!");
    } else {
      setSelectedFile(null); // Reset if invalid
      toast.error("Please upload a valid PDF file.");
    }
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      toast.warning("Please select a file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (onUpload && typeof onUpload === "function") {
        onUpload(reader.result); // Pass PDF data to parent
        toast.success("PDF uploaded successfully!");
      } else {
        toast.error("onUpload is not defined or is not a function.");
      }
    };
    reader.onerror = () => {
      toast.error("Failed to read the file.");
    };
    reader.readAsArrayBuffer(selectedFile); // Read the file as binary data
  };

  return (
    <div className="pdf-uploader">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />
      <button onClick={handleFileUpload}>Upload PDF</button>
    </div>
  );
};

export default PdfUploader;
