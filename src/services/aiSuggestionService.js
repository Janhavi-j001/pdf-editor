import axios from 'axios';

export const fetchAISuggestions = async (text) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: `Provide editing suggestions for the following text:\n\n${text}`,
        max_tokens: 200,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.split('\n').filter(Boolean);
  } catch (error) {
    throw new Error('AI suggestions fetch failed');
  }
};
