import  express from "express";
import cors from "cors";
import dotenv from "dotenv";


const app=express()
app.use(cors())
app.use(express.json())
dotenv.config()

const data=[{

    id:0,

    title:"reservación 1",

    descripcion:"quiero una reservacion a colombia"

},   {

      id:1,

     title:"reservación 2",

    descripcion:"quiero una reservacion a Brazil"

 }  ]

 app.get("/",(req,res)=>{

 

    res.json({

        msg:"Este es un menssaje",

        data:data

    })

})

 

// POST-CREA UNA RESERVACION

app.post("/",(req,res)=>{

 

    data.push({

        id:2,

        title:"reservacion 2",

        descripcion:"quiero una reservacion de mesa para 2 personas"

    })

 

    res.json({

        msg:"reservacion agregada",

        data:data,

    })





app.listen(3006,() => console.log("servidor encendido"))




})
