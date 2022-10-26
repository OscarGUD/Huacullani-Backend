import {connect} from "mongoose";

const connectionDB = async () => {
   try {
    const connection = await connect(process.env.MONGO_URI as string)
    console.log('connection on ' + connection.connection.host + connection.connection.port)
   } catch (error: any) {
    console.log(`error: ${error.message}`)
    process.exit(1)
   }
}

export default connectionDB