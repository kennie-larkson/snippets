const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    
    // res.send('./index.html');
    
})
app.use(express.static('public'));

app.listen(port, (req, res)=>{
    console.log(`Server running on port: ${port}`);
})