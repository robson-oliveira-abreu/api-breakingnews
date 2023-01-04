const express = require('express');
const app = express();
const userRoute = require('./src/routes/user.route')

const port = 8080;

app.use(express.json());

app.use('/user', userRoute)

app.listen(8080, () => console.log(`Server is running on port ${port}`))