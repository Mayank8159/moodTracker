require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/services/mongodb');

connectDB();
app.listen(5000, () => console.log('🚀 Server running on port 5000'));