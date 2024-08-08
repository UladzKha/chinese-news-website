export interface IArticle {
    _id: string;
    title: string;
    translatedTitle: string;
    translatedContent: string;
    url: string;
    significance: 'low' | 'medium' | 'high';
    publishDate: string;
    // originalUrl: string;
    source: string;
    tags: string[];
}
