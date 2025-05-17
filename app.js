//console.log("task-manager app");
const express = require('express');
const routes = require('./routes/task');
const app = express();
const connectMongodb = require('./db/connect');
require('dotenv').config();
const port = 3000;
app.use(express.json());
app.use('/api/v1/task', routes);
const start = async () => {
    try {
        await connectMongodb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`your server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();