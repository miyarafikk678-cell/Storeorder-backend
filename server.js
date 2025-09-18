const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

app.get("/", (req, res) => res.send("OK"));
app.get("/orders", (req, res) => res.json(orders));
app.post("/orders", (req, res) => {
  const { item, qty } = req.body;
  orders.push({ item, qty });
  res.json({ success: true, ordersLength: orders.length });
});

// Use Render's provided port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Helpful crash logs
process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection:', reason);
});
