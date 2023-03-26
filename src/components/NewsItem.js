import React from "react"

const NewsItem = (props) =>{
        let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem", margin: "auto"}}>
                    <img src={imageUrl} className="card-img-top" alt="placeholder"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small>By {!author? "Unknown": author} on {new Date(date).toDateString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
}


export default NewsItem