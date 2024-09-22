const express = require('express')
const mainRouter = require('./Routes/index');

const app = express();

app.use(express.json());

app.use("/api/v1", mainRouter);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
