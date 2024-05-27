const express = require('express')
const app = express()

app.get('/myinfoapi',(req,res)=>{
    res.json({"owner" : ["Dhruv","20","Male","Student","Divine coder"]})
})

app.listen(5000,()=>{console.log("App live on localhost:5100")})