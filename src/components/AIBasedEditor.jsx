import React, { useState } from 'react';
import { extractText, getAISuggestions } from '../utils/aiUtils';
import './styles/AIBasedEditor.css';

const AIBasedEditor = ({ file }) => {
  const [extractedText, setExtractedText] = useState('');
  const [aiSuggestions, setAISuggestions] = useState([]);

  const handleExtractText = async () => {
    const text = await extractText(file);
    setExtractedText(text);
  };

  const handleGetSuggestions = async () => {
    const suggestions = await getAISuggestions(extractedText);
    setAISuggestions(suggestions);
  };

  return (
    <div className="ai-editor">
      <button onClick={handleExtractText}>Extract Text</button>
      <button onClick={handleGetSuggestions} disabled={!extractedText}>
        Get AI Suggestions
      </button>
      <div className="editor-output">
        <h3>Extracted Text</h3>
        <p>{extractedText}</p>
        <h3>AI Suggestions</h3>
        <ul>
          {aiSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIBasedEditor;
