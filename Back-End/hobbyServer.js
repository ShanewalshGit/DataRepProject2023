const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

// Avoid a CORS error occuring
app.use(cors());

app.use(function(req, res, next) { //allow cross origin requests
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// for body parsing
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Mongoose setup
const mongoose = require('mongoose');
const { request } = require('http');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hobbyadmin:hobbyadmin@shanescluster.bayvtko.mongodb.net/?retryWrites=true&w=majority');
}

// Establish Schema
const hobbySchema = new mongoose.Schema({
    hobbyName:String,
    picture:String,
    description:String,
    difficulty:String,
    videoUrl:String
});

// Create hobby model using mongoose
const hobbyModel = mongoose.model('hobbies', hobbySchema);

// Update hobby data based on id
app.put('/api/hobby/:id', async(req,res)=>{
    console.log("Update: "+req.params.id);
    let hobby = await hobbyModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(hobby);
})

// Delete hobby data based on id
app.delete('/api/hobby/:id', async(req,res)=>{
    console.log("Delete: "+req.params.id);
    let hobby = await hobbyModel.findByIdAndDelete(req.params.id);
    res.send(hobby);
})

// returns welcome message to the base url for our server
app.get('/', (req, res) => {
  res.send('Welcome to my Hobby app!')
})

// returns hobby json data
app.get('/api/hobbies', async (req,res) =>{
    let hobbies = await hobbyModel.find({});
    res.json(hobbies);
})

// returns hobbydata from hobbyModel based on id
app.get('/api/hobby/:id', async (req,res)=>{
    console.log(req.params.id);

    let hobby = await hobbyModel.findById({_id:req.params.id}); // find hobby based on id
    res.send(hobby);
})

// returns the indicated file, in this case index.html
app.get('/test', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
})

// after submission on index form, return "Hello " with our submitted names
app.get('/name', (req,res) => {
    res.send("Hello "+req.query.fname + " " + req.query.lname);
})

// returns a secure output using post and body parser of our sent hobby data from addHobby.js
app.post('/api/hobbies', (req,res) =>{
    console.log(req.body);
    try {
    hobbyModel.create({ // create hobby model with the following data
        hobbyName:req.body.hobbyName,
        picture:req.body.picture,
        description:req.body.description,
        difficulty:req.body.difficulty,
        videoUrl:req.body.videoUrl
    })
    .then(()=>{res.send("Hobby Added Successfully")})
    .catch(()=>{res.send("Hobby Not Created")})
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Listens in on the selected port (4000 for us)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})