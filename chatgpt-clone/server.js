require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000; // Dostosuj port do swoich potrzeb
const apiKey = process.env.OPENAI_API_KEY; // Pobieraj klucz API z zmiennych środowiskowych

if (!apiKey) {
  console.error("Brak klucza API OpenAI. Ustaw zmienną OPENAI_API_KEY.");
  process.exit(1);
}

const axiosConfig = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

app.post("/completions", async (req, res) => {
  const options = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "how are you" }],
    max_tokens: 300,
  };

  try {
    const response = await axiosConfig.post("/chat/completions", options);
    const responseData = response.data;

    res.json(responseData);
  } catch (error) {
    console.error("Błąd podczas przetwarzania zapytania:", error);
    res.status(500).json({ error: "Wystąpił błąd serwera" });
  }
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
