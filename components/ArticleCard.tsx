import {Button, Card, CardContent, Chip, Grid, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";
import {IArticle} from "../types";

interface ArticleCardProps {
    article: IArticle
}

export const getSignificanceColor = (significance: string) => {
    switch (significance) {
        case "high":
            return 'error';
        case "medium":
            return "warning";
        case "low":
        default:
            return 'success';
    }
}

export const ArticleCard: React.FC<ArticleCardProps> = ({article}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.translatedContent.substring(0, 120)}
                </Typography>
                <Chip
                    label={article.significance}
                    color={getSignificanceColor(article.significance)}
                    size="small"
                    style={{marginTop: '10px'}}
                />
                <Typography variant="caption" display="block" style={{marginTop: '10px'}}>
                    Published: {new Date(article.publishDate).toLocaleString()}
                </Typography>
                <Grid style={{marginTop: 20}}>
                    <Link href={`/articles/${article._id}`}>
                        <Button variant="text" component="a">Read</Button>
                    </Link>
                </Grid>
            </CardContent>
        </Card>
    )
}
