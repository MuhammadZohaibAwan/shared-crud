const mongoose = require('mongoose');
const express = require('express')

const app = express()


const userRoute = require('./routes/user-routes')

app.use(express.json())



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/atif-crud');

}

app.use('/submit-complaint', userRoute)




app.listen(3000, () => {
    console.log(`Server running at port ${3000}`);
})

