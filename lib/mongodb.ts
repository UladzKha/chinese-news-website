import {MongoClient, MongoClientOptions} from "mongodb";

if (!process.env.MONGODB_URI) throw new Error('Please add your MongoDB URI to .env.local');

const uri: string = process.env.MONGODB_URI;
const client: MongoClient = new MongoClient(uri);
const clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;



