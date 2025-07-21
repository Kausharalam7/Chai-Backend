require('dotenv').config();
const express=require("express");
const app=express();


app.get('/',(req,res)=>{
    res.send("helo this is kaushar alam")
})

app.get('/twitter',(req,res)=>{
    res.send("hiteshdomcom")
})

app.get('/login',(req,res)=>{
    res.send("please login at chai aur code ")
})

app.get('/youtube',(req,res)=>{
    res.send(" <h1>like and share kare </h1> ")
})

app.listen(process.env.PORT, () => {
    console.log(`server is working at ${process.env.PORT}`);
});