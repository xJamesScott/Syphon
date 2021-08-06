import mongoose from 'mongoose';
import { ReactReduxContext, Provider } from 'react-redux';
import { useStore } from '../store/store'


if (!process.env.MONGO_URI) {

  console.log('Please define the MONGODB_URI environment variable inside .env');
  // throw new Error(
  //   'Please define the MONGODB_URI environment variable inside .env'
  // )
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

  let mongoURI;

  // if (scope == "global") {
  mongoURI = process.env.MONGO_URI_GLOBAL;
  // } else {
  // mongoURI = process.env.MONGO_URI;
  // };

  if (connection.isconnected) {
    return
  }

  const db = await mongoose.connect(mongoURI, {
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



    cached.promise = await mongoose.connect(mongoURI, opts).then((mongoose) => {
      return mongoose
    });
  }

  cached.conn = await cached.promise
  return cached.conn
};

export default dbConnect;