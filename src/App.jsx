import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PDFUploader from "./components/PDFUploader";
import PDFViewer from "./components/PDFViewer";
import PDFEditor from "./components/PDFEditor";
import SavePDF from "./components/SavePDF";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FrontPage from "./components/FrontPage";

const App = () => {
  const [pdfData, setPdfData] = useState(null); // State to manage uploaded PDF data

  // Handler for file upload
  const handlePdfUpload = (data) => {
    setPdfData(data); // Store uploaded PDF data
  };

  return (
    <Router>
      <div>
        {/* Toast Notifications */}
        <ToastContainer />

        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main>
          <Routes>
          
            {/* Route for Upload */}
            <Route path="/" element={<PDFUploader onUpload={handlePdfUpload} />} />
            <Route path="/upload" element={<PDFUploader onUpload={handlePdfUpload} />} />

            {/* Route for Viewer */}
            <Route
              path="/viewer"
              element={pdfData ? <PDFViewer file={pdfData} /> : <p>No PDF uploaded yet.</p>}
            />

            {/* Route for Editor */}
            <Route
              path="/editor"
              element={
                pdfData ? (
                  <PDFEditor file={pdfData} />
                ) : (
                  <p>Please upload a PDF to access the editor.</p>
                )
              }
            />

            {/* Route for Save */}
            <Route
              path="/save"
              element={
                pdfData ? (
                  <SavePDF file={pdfData} />
                ) : (
                  <p>No PDF to save. Upload and edit a PDF first.</p>
                )
              }
            />

            {/* Route for Contact */}
            <Route path="/contact" element={<h1>Contact Us Page</h1>} />
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
