import React, { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styles/PDFEditor.css";
import { toast } from "react-toastify";

// Import the worker locally
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PDFEditor = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [textAnnotations, setTextAnnotations] = useState([]);
  const canvasRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to the first page
  };

  const handleAddText = () => {
    const text = prompt("Enter the text you want to add:");
    if (text) {
      setTextAnnotations((prev) => [
        ...prev,
        { text, x: 50, y: 50 }, // Default position; user can move it later
      ]);
      toast.success("Text added!");
    }
  };

  const handleBlur = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.filter = "blur(5px)";
    ctx.fillRect(50, 50, 100, 50); // Example blurred rectangle
    toast.info("Blurring applied.");
  };

  const handleErase = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(50, 50, 100, 50); // Example erased rectangle
    toast.info("Erase applied.");
  };

  return (
    <div className="pdf-editor">
      <div className="editor-toolbar">
        <button onClick={handleAddText}>Add Text</button>
        <button onClick={handleBlur}>Blur</button>
        <button onClick={handleErase}>Erase</button>
      </div>

      <div className="editor-container">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          <Page pageNumber={pageNumber} canvasRef={canvasRef} />
        </Document>
        <div className="navigation">
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Text Annotations */}
      <div className="annotations-container">
        {textAnnotations.map((annotation, index) => (
          <div
            key={index}
            className="text-annotation"
            style={{
              position: "absolute",
              left: annotation.x,
              top: annotation.y,
            }}
          >
            {annotation.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFEditor;
