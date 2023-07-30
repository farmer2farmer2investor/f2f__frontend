import React from 'react';
import NewsImage from '../../assets/News/point1.jpeg';

// stylesheet
import classes from './News.module.css';

const News = () => {
    return (
        <div className={classes.news}>
            <div className={classes.banner}>
                <h1>#latest and updated news</h1>
                <p>Top trending News</p>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
            <div className={classes.newsContainer}>
                <h1 className={classes.heading}>Dairy</h1>
                <div className={classes.newsCard}>
                    <div className={classes.title}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt?</p>
                        <button className={classes.btn}>Know more...</button>
                    </div>
                    <div className={classes.image}>
                        <img src={NewsImage} alt="news" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News