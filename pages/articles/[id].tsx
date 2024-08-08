'use client'
import {Chip} from "@mui/material";
import axios from "axios";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {getSignificanceColor} from "../../components/ArticleCard";
import {IArticle} from "../../types";
import styles from './ArticlePage.module.css';

export default function ArticlePage() {
    const router = useRouter();
    const {id} = router.query;
    const [article, setArticle] = useState<IArticle>()

    useEffect(() => {
        const func = async () => {
            const fetchedArticle = await axios.get(`/api/getArticle?id=${id}`);
            setArticle(fetchedArticle.data);
        }

        id && func();
    }, [id]);

    if (router.isFallback || !article) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <h1 className={styles.title}>{article.translatedTitle}</h1>
                <div className={styles.meta}>
                    <span className={styles.source}>Source: {article.source}</span>
                    <span className={styles.date}>
                        {new Date(article.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                     </span>
                    <Chip
                        label={article.significance}
                        color={getSignificanceColor(article.significance)}
                        size="small"
                        style={{marginTop: '10px'}}
                    />
                </div>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{__html: article.translatedContent}}
                />
                <div className={styles.tags}>
                    {article.tags.length ? article.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    )) : null}
                </div>
                <div className={styles.originalLink}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read Original Article</a>
                </div>
            </article>
            <button className={styles.backButton} onClick={() => router.back()}>
                &larr; Back to Articles
            </button>
        </div>
    );

}
