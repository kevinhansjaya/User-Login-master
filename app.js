const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;



//DB config

const  URI ='mongodb+srv://kevinhansjaya89:pass@mernshopping-bjnzw.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI,{useNewUrlParser: true})
.then(()=>{
    console.log('MongoDb connected...');
})
.catch((err)=>{
    console.log(err);
})

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended: false }))


//Routes 
app.use('/', require("./routes/index"));
app.use('/users', require("./routes/users"));

app.listen(port,()=>{
    console.log('Server is running on port ' + port);
})