const { GoogleGenAI } = require("@google/genai");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "AI service not configured", success: false });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
    });

    const responseText = response.text || "Xin loi, toi khong the tao phan hoi luc nay.";

    return res.status(200).json({
      response: responseText,
      timestamp: new Date().toISOString(),
      success: true
    });

  } catch (error) {
    console.error("Gemini API error:", error.message);
    return res.status(500).json({
      error: "Xin loi, co loi xay ra khi ket noi voi AI. Vui long thu lai sau.",
      details: error.message,
      success: false
    });
  }
};
