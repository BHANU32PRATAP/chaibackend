import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()




/*
import express from "express";
const app = express()
(async() => {
    try {
        const DB = await mongoose.connect(`${process.env.
                MONGODB_URIF}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error)
            throw error
        })


        app.listen(process.env.PORT, () => {
            console.log(`App listing on port ${process, env.PORT}`)
        })


    } catch (erro) {
        console.error("Error", erro)
        throw erro
    }
})()*/