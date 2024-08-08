import axios from "axios";
import {IArticle} from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function fetchArticles(): Promise<IArticle[]> {
    const response = await axios.get<IArticle[]>(`${API_URL}/articles`);

    return response.data;
}
