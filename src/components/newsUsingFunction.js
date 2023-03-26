//News.js implemented by Rohan using Functions not class based components

import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";

function News () {

    const[articles,setarticles]=useState([]);

    const fetchData=async()=>{
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6b3d20e9153d48bd993929372434ffd8";
        let data =await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setarticles(parsedData.articles);
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    const handlePrevClick = () => {
        console.log("Next");
    } 

    const handleNextClick = () => {
        console.log("Prev");
    }

        return (
            <div className="container my-3">
                <h1>News&You main headlines</h1>
                <div className="row">
                {articles.map((element)=>{
                    return(
                        <div className="col md-4" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://image.cnbcfm.com/api/v1/image/107193585-1676303801992-gettyimages-1246704847-porzycki-economya230130_npwED.jpeg?v=1676376153&w=1920&h=1080"} newsUrl={element.url}/>
                        </div>
                    )
                })}
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={handlePrevClick}>&larr; Previous</button>
                    <button className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
}

export default News;