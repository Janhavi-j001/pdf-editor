import { performOCR } from '../services/ocrService';
import { fetchAISuggestions } from '../services/aiSuggestionService';

export const extractText = async (file) => {
  try {
    const text = await performOCR(file);
    return text;
  } catch (error) {
    console.error('Error extracting text:', error);
    return '';
  }
};

export const getAISuggestions = async (text) => {
  try {
    const suggestions = await fetchAISuggestions(text);
    return suggestions;
  } catch (error) {
    console.error('Error fetching AI suggestions:', error);
    return [];
  }
};
