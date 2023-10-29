const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./server/db.server.js');
const router = require('./routes/rootRouter.js');
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
connectDB()

app.use ('/', router)


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });