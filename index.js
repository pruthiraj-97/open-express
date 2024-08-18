const express=require('express')
const app=express()
const PORT=4000

function startServer(){
    try {
        app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
    } catch (error) {
        console.log("error in server connection")
        process.env(1)
    }
}

startServer()