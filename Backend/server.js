const express = require('express');
const mongoose= require('mongoose');
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const port = 4022;

const mongoUrl = "mongodb+srv://kavyareddyamanaganti:kavyareddyamanaganti@cluster0.fgrgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl, {});
mongoose.connection.on('connected',() => {
    console.log("connected to mongoDB sucessfully");

})

app.listen(port,()=>{
    console.log("Server connected succefully" +port)
})