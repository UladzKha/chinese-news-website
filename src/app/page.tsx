'use client'

import {Container, Typography} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import {ArticleList} from "../../components/ArticleList";
import {IArticle} from "../../types";

export default function Home() {
    const [articles, setArticles] = useState<IArticle[]>([])

    useEffect(() => {
        const getArticles = async () => {
            const fetchedArticles = await axios.get<IArticle[]>('/api/getData');

            setArticles(fetchedArticles.data as IArticle[]);
        }

        getArticles();

    }, [])

  return (
      <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
              Latest Tech News
          </Typography>
          <ArticleList articles={articles}/>
      </Container>
  );
}
