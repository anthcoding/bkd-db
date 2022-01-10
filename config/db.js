const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_MONGO);
		console.log('Connection to the DB was succesfull');
	} catch (error) {
		console.log(error.message);
		process.exit(1); //Stop the app
	}
};

module.exports = connectDB;
