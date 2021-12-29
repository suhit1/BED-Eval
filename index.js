const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))

// app.use(function(req,res,next){
//     fs.readFile("./database.txt",function(err,data){
//         if(err){
//             res.statusCode = 500;
//             console.log(err)
//             res.send("some problem in server");
//             return
//         }
//         if(data.length === 0){
//             data = JSON.stringify([])
//         }
//         req.body.fileData = data
//         // console.log(JSON.parse(data))
//         next()
//     })
// })


app.post("/", function(req,res){
    var filedata = [req.body]
    fs.appendFile("./database.txt",JSON.stringify(filedata),function(err){
        if(!err)
            res.send(JSON.stringify("success"))
    })
})

app.listen("8000",function(){
    console.log("app is running on port 8000");
})