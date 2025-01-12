import mongoose from "mongoose"


export async function dbConnect() {

    let isConnected = false


    try {
        let connected = await mongoose.connect(process.env.MONGODB_URI)

        if (isConnected) return "DB already connected"
        if (connected.connection.readyState == 1) {
             isConnected = true
            console.log("Database connected successfully")

        }
    }  catch (e) {
        console.log(e)
    }
}
        