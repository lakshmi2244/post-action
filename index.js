const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=4022;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())


app.get("/",(req,res)=>{
	res.send("Activate windows")
})

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age,course,email,password,gender}=req.body
	console.log("name,age,course,email,password and gender is",name,age,course,email,password,gender)
	res.send("added data")
})
app.listen(port,()=>console.log("served started at 4022"))