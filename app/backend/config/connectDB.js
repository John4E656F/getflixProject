const mongoose = require("mongoose");
const Db = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		const conn = mongoose.connect(Db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Connected : ${conn.connection.host}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = connectDB;
