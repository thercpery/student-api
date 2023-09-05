require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./src/common/logger');
const studentRoutes = require('./src/routes/student');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/students', studentRoutes);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', () => logger.error('connection error'));
db.once('open', () => logger.info("We're connected to the MongoDB Atlas"));

app.listen(port, () => logger.info(`Server running at port ${port}`));
