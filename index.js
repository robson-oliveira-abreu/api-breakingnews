const express = require('express');
const userRoute = require('./src/routes/user.route')

const app = express();

app.use('/soma', userRoute)

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})