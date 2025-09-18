const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let orders = []; // temporary in-memory DB

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// Create new order
app.post("/orders", (req, res) => {
  const { item, qty } = req.body;
  orders.push({ item, qty });
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
