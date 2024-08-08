import {Grid} from "@mui/material";
import React from "react";
import {IArticle} from "../types";
import {ArticleCard} from "./ArticleCard";

interface IArticleListProps {
    articles: IArticle[];
}

export const ArticleList: React.FC<IArticleListProps> = ({articles}) => {
    return (
        <Grid container spacing={3}>
            {articles.length ? articles.map((article: IArticle) => {
                return (
                    <Grid key={article._id} item xs={12} sm={6}>
                        <ArticleCard article={article}/>
                    </Grid>
                )
            }) : null}
        </Grid>
    )
}
