const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello I am learning node js');
})

const users = [
    {id:'0',name:'Rimon',designation:'student',email:'rimonmpi@gmail.com',phone:'01763550545'},
    {id:'1',name:'Hasib',designation:'teacher',email:'hasib@gmail.com',phone:'01763550535'},
    {id:'2',name:'Zenin',designation:'worker',email:'zenin@gmail.com',phone:'01763550555'},
    {id:'3',name:'Rabbil',designation:'developer',email:'rabbil@gmail.com',phone:'01763550535'},
    {id:'4',name:'Zara',designation:'student',email:'zara@gmail.com',phone:'017635503455'},
    {id:'5',name:'Rezewan',designation:'worker',email:'rezowan@gmail.com',phone:'019828118537'},
]


// practice url 
// app METHOD
app.get('/users',(req,res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }else{
        res.send(users);
    }
 
})

// receive data from client server
app.post('/users',(req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(users);
    res.json(newUser);
})

app.get('/users/:id',(req,res) => {
    console.log(req.params.id);
    const findIndex = req.params.id;
    const user = users[findIndex];
    res.send(user);
})

app.get('/fruits/mango',(req,res) => {
    res.send('Mangoes is a very beautiful fruits');
})


app.get('/fruits',(req,res) => {
    res.send('fruits are very essential to our body');
})

app.listen(port,() => {
    console.log('port on running',port);
})