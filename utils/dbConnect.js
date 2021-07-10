import mongoose from 'mongoose';
import { ReactReduxContext, Provider } from 'react-redux';
import { useStore } from '../store/store'


if (!process.env.MONGO_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
};

const connection = {};

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

// NO CACHE CONNECTION

// async function dbConnect() {
//   if (connection.isconnected) {
//     return
//   }

//   const db = await mongoose.connect(process.env.MONGO_URI_GLOBAL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   connection.isConnected = db.connections[0].readyState;
//   console.log({ connection: connection.isConnected })
// }


// CACHED CONNECTION

async function dbConnect(scope) {
  if (connection.isconnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGO_URI_GLOBAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log({ connection: connection.isConnected })

  if (cached.conn) {
    return cached.conn
  };

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    let mongoURI;

    // if (scope == "global") {
    mongoURI = process.env.MONGO_URI_GLOBAL;
    // } else {
    //   mongoURI = process.env.MONGO_URI;
    // };

    cached.promise = await mongoose.connect(process.env.MONGO_URI_GLOBAL, opts).then((mongoose) => {
      return mongoose
    });
  }

  cached.conn = await cached.promise
  return cached.conn
};

export default dbConnect;