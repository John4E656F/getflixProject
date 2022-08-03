const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/?retryWrites=true&w=majority`, {
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




// const mongoose = require("mongoose");


// const db = process.env.MONGO_URI;


// const connectDB = async () => {
// 	try {
// 		const conn = mongoose.connect(db, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});
// 		console.log(`MongoDB Connected : ${conn.connection.host}`);
// 	} catch (error) {
// 		console.error(error);
// 		process.exit(1);
// 	}
// };

// module.exports = connectDB;
