import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({ file }) => {
  if (!file) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>No PDF file selected for viewing.</p>;
  }

  return (
    <div style={{ height: "750px", border: "1px solid rgba(0, 0, 0, 0.3)", margin: "20px" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={URL.createObjectURL(new Blob([file], { type: "application/pdf" }))} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
