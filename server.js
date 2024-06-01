const express = require('express');
const app = express();
const bp = require(`body-parser`)
app.use(express.static('client'));

app.use(bp.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/client/register.html');
});

 

app.post(`/`,(req,res)=>{
    res.sendFile(__dirname + '/client/register.html')
    console.log(req.body)
})



app.post(`/register`,(req,res)=>{
   res.sendFile(__dirname + '/client/homepage.html')
    console.log(req.body)
})









app.listen(`3000`,()=>{console.log(`server on 3000`);})