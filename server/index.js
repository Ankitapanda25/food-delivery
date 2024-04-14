require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const User = require('./Models/User')
const { body, validationResult } = require('express-validator');





const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jae60lj.mongodb.net/fooddata?retryWrites=true&w=majority`

const connectDB = async() => {
  await mongoose.connect(mongoURI);
  console.log('connected');
  const fetched_data = await mongoose.connection.db.collection('fooditems')
  
  const data = await fetched_data.find({}).toArray() 
    
  const foodCategory = await mongoose.connection.db.collection('foodCategory')
  const catData = await foodCategory.find({}).toArray() 
  global.fooditems = data;
  global.foodCategory = catData;
  

}


connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors())

app.use(express.json()) 
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.use('/api', require('./Routes/Stripe'));


  
  app.listen(port, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port)
  })