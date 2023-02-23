const express = require('express')
const app = express()
const mysql = require('mysql2')
const cor = require("cors");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Trips0075@#",
    database:"interviewdetailsdatabase",

});

app.get('/',(req,res) =>
{   
   
   res.json("jai shree ram")


});

app.get("/interview", (req,res)=>
{
    const q= "SELECT * FROM interviewdetails"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/interview", (req,res)=>{
    const query = "INSERT INTO interviewdetails(`name`,`email`,`st`,`et`) VALUES (?)"
    const values= ["req.body.name",
    "req.body.email",
    "req.body.st",
    "req.body.et"]
    db.query(query,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("bewjbhcwe")
    })
})  
app.listen(3000);