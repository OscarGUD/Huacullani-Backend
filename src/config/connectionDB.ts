import {connect} from "mongoose";

const connectionDB = async () => {
   try {
    const connection = await connect(<string>process.env.MONGO_URI)
    console.log('connection on ' + connection.connection.host + connection.connection.port)
   } catch (error: any) {
    console.log(`error: ${error.message}`)
    process.exit(1)
   }
}

export default connectionDB