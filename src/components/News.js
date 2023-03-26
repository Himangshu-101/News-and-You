import React, { useEffect , useState} from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6b3d20e9153d48bd993929372434ffd8&page=${page}&pageSize=${props.pageSize}`;
        setLoading({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News&You`
        updateNews();
    }, [])

    // const handlePrevClick = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6b3d20e9153d48bd993929372434ffd8&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

        return (
            <div className="container my-3 pt-5">
                <h1 className="text-center mt-4" style={{ color: "rgb(71, 71, 113)", textDecoration: "underline" }}>News&You</h1>
                <h2 className="text-center my-3" style={{ color: "rgb(71, 71, 113)" }}>Category - {capitalizeFirstLetter(props.category)}</h2>
                {/* {loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="row m-auto">
                        {articles.map((element) => {
                            return (
                                <div className="col md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107193585-1676303801992-gettyimages-1246704847-porzycki-economya230130_npwED.jpeg?v=1676376153&w=1920&h=1080"} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            )
                        })}
                    </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News