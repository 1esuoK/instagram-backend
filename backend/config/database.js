const mongoose = require('mongoose');

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());

const connectDatabase = () => {
    mongoose.connect(`mongodb+srv://21521654:${password}@devcluster.d7stdkl.mongodb.net/?retryWrites=true&w=majority&appName=DevCluster`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;