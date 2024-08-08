import {ObjectId} from 'mongodb';
import {NextApiRequest, NextApiResponse} from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const objectId = new ObjectId(req.query.id as string);
        const client = await clientPromise;
        const db = client.db('test');
        const article = await db.collection('articles').findOne({_id: objectId});

        return res.status(200).json(article);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Unable to fetch data'});
    }
}
