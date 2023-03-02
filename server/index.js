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

app.use(express.json());
app.use(cor());
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
    const query = "INSERT INTO interviewdetails(`name`,`email`,`date`,`st`,`et`) VALUES (?)";
    const values= [req.body.name,
     req.body.email,
    req.body.date,
    req.body.st,
    req.body.et];
    db.query(query,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
}) ;
app.delete("/interview/:id", (req,res) =>
{
    const interviewee_id = req.params.id;
    const query = "DELETE FROM interviewdetails WHERE id = ?";

    db.query(query, [interviewee_id], (err,data)=>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.put("/interview/:id", (req,res) =>
{
    const interviewee_id = req.params.id;
    const query = "UPDATE interviewdetails SET `name` = ?, `email` = ?, `date` = ?, `st` = ?, `et` = ? WHERE id = ? ";
    const values= [req.body.name,
        req.body.email,
       req.body.date,
       req.body.st,
       req.body.et];
    db.query(query, [...values,interviewee_id], (err,data)=>
    {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get("/interview/:id", (req,res) =>
{
    const interviewee_id = req.params.id;
    const query = "SELECT * FROM interviewdetails WHERE id = ?";
    db.query(query,[ interviewee_id], (err,data)=>
    {
         if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(3000);