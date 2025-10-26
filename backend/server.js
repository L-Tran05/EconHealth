const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get('/', (req, res) => {
  res.json({ message: 'EconHealth Backend is running!' });
});

app.post('/api/analyze-bill', async (req, res) => {
  try {
    const { billText } = req.body;
    
    const prompt = `Analyze this medical bill and extract: total amount, state, type of care, insurance status. Format as JSON.
    
    Bill: ${billText}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ success: true, analysis: text });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { question } = req.body;
    
    const prompt = `You are a medical billing assistant. Answer this briefly: ${question}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();
    
    res.json({ success: true, answer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 EconHealth Backend running on http://localhost:${PORT}`);
  console.log(`✅ Gemini API configured`);
});