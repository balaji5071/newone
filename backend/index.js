const express=require("express")
const cors=require("cors")
require("dotenv").config()
const port=process.env.PORT || 6000

const app=express()

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).send("hello")
})
app.post('/',(req,res)=>{
    const {name,age}=req.body
    if(!name || !age )
        return res.status(400).json({message:'fill the details '})
    else 
     return res.status(200).json({message:'everey thing is fine now you can procced '})

})
app.listen(port,()=>{
    console.log(`connected successful ${port}`)
})