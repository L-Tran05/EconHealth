const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'EconHealth Backend is running!' });
});

// Bill analysis endpoint
app.post('/api/analyze-bill', async (req, res) => {
  try {
    const { billText } = req.body;
    
    const prompt = `Analyze this medical bill and extract the following information in JSON format:
    {
      "totalAmount": number,
      "state": string,
      "typeOfCare": string (ER, surgery, office visit, etc),
      "hasInsurance": boolean,
      "provider": string,
      "mainCharges": array of top 3-5 charges with amounts
    }
    
    Bill text: ${billText}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysisText = response.text();
    
    // Try to parse JSON from response
    const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
    const analysis = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: analysisText };
    
    res.json({ 
      success: true,
      analysis,
      rawResponse: analysisText
    });
  } catch (error) {
    console.error('Error analyzing bill:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Chatbot endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { question } = req.body;
    
    const prompt = `You are a helpful medical billing assistant for EconHealth. 
    Answer this question clearly and concisely (2-3 paragraphs max).
    Be empathetic and provide actionable advice.
    
    Question: ${question}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();
    
    res.json({ 
      success: true,
      answer 
    });
  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 EconHealth Backend running on http://localhost:${PORT}`);
  console.log(`✅ Gemini API configured`);
});