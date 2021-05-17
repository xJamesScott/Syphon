import mongoose from 'mongoose';
import { ReactReduxContext, Provider } from 'react-redux';
import { useStore } from '../store'

const connection = {};

async function dbConnect() {
    if (connection.isconnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log({ connection: connection.isConnected })
}

export default dbConnect;