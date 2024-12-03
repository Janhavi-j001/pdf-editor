import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import axios from 'axios';
import PropTypes from 'prop-types';
import './AITextHighlighter.css'; // Optional for custom styling

const AITextHighlight = ({ pdfText }) => {
  const [highlightedText, setHighlightedText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAIHighlight = async () => {
    setLoading(true);
    setError('');

    try {
      // Sending text to AI (e.g., OpenAI) for analysis
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: `Analyze the following PDF content and highlight important legal or significant terms:\n\n${pdfText}`,
          max_tokens: 1000,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const aiResult = response.data.choices[0].text;
      const keywords = aiResult.split(',').map((word) => word.trim());
      setHighlightedText(keywords);
    } catch (err) {
      setError('Failed to fetch AI highlights. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="ai-text-highlight">
      <button onClick={handleAIHighlight} disabled={loading}>
        {loading ? 'Analyzing...' : 'Highlight Important Text'}
      </button>
      {error && <p className="error-message">{error}</p>}
      <div className="pdf-content">
        {pdfText.split(' ').map((word, index) => (
          <span
            key={index}
            className={highlightedText.includes(word) ? 'highlight' : ''}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

AITextHighlight.propTypes = {
  pdfText: PropTypes.string.isRequired,
};

export default AITextHighlighter;
