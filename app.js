//console.log("task-manager app");
const express = require('express');
const routes = require('./routes/task');
const app = express();
const connectMongodb = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
//middlewares
app.use(express.static('./public'));
app.use(express.json());
//routes
app.use('/api/v1/tasks', routes);
app.use(notFound);
const port = 3000;
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