const express = require('express');
const connectDB = require('./config/db.js');
require('dotenv').config({ path: '.env' });

const app = express();

connectDB();

app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;
console.log(port);

app.listen(port, '0.0.0.0', () => {
	console.log('Server running on PORT: ' + port);
});
