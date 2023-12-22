const express =require("express");
const cors = require ('cors')
const app = express();
const port = process.env.PORT||5000;

app.get('/',(req,res) =>{
      res.send("job tasking is running for local")
})

app.listen(port,()=>{
      console.log(`Tasking job is running ${port}`);
})