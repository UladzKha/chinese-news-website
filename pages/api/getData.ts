import {NextApiRequest, NextApiResponse} from "next";
import clientPromise from "../../lib/mongodb";
import {IArticle} from "../../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await clientPromise;
        const db = client.db('test');
        const data = await db.collection<IArticle[]>('articles').find({}).sort({'publishDate': -1}).toArray();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Unable to fetch data'});
    }
}
