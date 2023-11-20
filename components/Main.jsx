
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import React from 'react'

const ContentBlock = ({ article }) => {
    const imageUrl = article.urlToImage ? article.urlToImage : 'placeholder.png'; 
    return (
    <div className={styles.content_block}>
        <div className={styles['content-image']}>
            <img
                src={imageUrl}
                alt="Contenu"
                className={styles['article-image']}
            />
        </div>
        <div className={styles['content-text']}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
            </a>
        </div>
    </div>
    )
}
export default function Main() {
    const [newsData, setNewsData] = useState([]);
    
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?sources=the-verge&apiKey=ea9de4228ae84abf9549d044313e1e58')
        .then((response) => response.json())
        .then((data) => {
            setNewsData(data.articles); 
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []); 
    
    return (
        <div className={styles.container}>
            {newsData.map((article, i)=>{
                return  <ContentBlock article={article} key={i}/>
            })}
        </div>
    )
    
}
