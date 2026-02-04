const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Contact route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Invalid form data." });
  }

  console.log("Contact Form:", name, email, message);
  res.json({ message: "Message sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});