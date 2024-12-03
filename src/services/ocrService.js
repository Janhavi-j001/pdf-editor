import Tesseract from 'tesseract.js';

export const performOCR = async (file) => {
  try {
    const { data } = await Tesseract.recognize(file, 'eng');
    return data.text;
  } catch (error) {
    throw new Error('OCR failed');
  }
};
