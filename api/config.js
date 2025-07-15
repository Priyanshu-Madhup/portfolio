// Vercel serverless function to provide API configuration
// This keeps API keys secure on the server side

export default function handler(req, res) {
  // Set CORS headers for client-side access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Get API keys from Vercel environment variables
    const groqApiKey = process.env.GROQ_API_KEY;
    const serperApiKey = process.env.SERPER_API_KEY;

    // Return configuration (keys are kept on server, only availability is sent)
    res.status(200).json({
      groqApiKey: groqApiKey || null,
      serperApiKey: serperApiKey || null,
      hasGroqKey: !!groqApiKey,
      hasSerperKey: !!serperApiKey,
      aiEnabled: !!(groqApiKey && serperApiKey)
    });
  } catch (error) {
    console.error('Config API error:', error);
    res.status(500).json({ 
      error: 'Failed to load configuration',
      groqApiKey: null,
      serperApiKey: null,
      hasGroqKey: false,
      hasSerperKey: false,
      aiEnabled: false
    });
  }
}
