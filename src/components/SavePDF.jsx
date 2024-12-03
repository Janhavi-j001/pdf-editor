import React from "react";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SavePDF = ({ modifiedPdfData }) => {
  const handleSavePdf = async () => {
    try {
      const pdfDoc = await PDFDocument.load(modifiedPdfData);

      // Perform any additional edits here if needed
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      saveAs(blob, "ModifiedDocument.pdf");
      toast.success("PDF saved successfully!");
    } catch (error) {
      toast.error("Failed to save the PDF.");
    }
  };

  return (
    <div className="save-pdf">
      <button onClick={handleSavePdf}>Save PDF</button>
    </div>
  );
};

export default SavePDF;
