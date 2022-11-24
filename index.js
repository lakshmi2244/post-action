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
	const {name,age}=req.body
	console.log("name and age is",name,age)
})
app.listen(port,()=>console.log("served started at 4022"))