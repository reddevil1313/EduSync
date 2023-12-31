const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/edusync', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});

