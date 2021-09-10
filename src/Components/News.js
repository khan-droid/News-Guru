import React, {useEffect, useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const fetchMoreData = async() => {
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page+1}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
      };
    
    const updateNews = async ()=>{
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews();
    },[])
        return (
            <>
            <div className="container my-3">
                <h1 className="text-center" style={{marginTop: '90px'}}>News Guru - Headlines from {(props.category)}</h1>
                {loading && <Spinner/>}{/*show spinner component only when  loading is true*/}
                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                <div className="container">
                <div className="row" >
                {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                </div>
              })}
              </div>
              </div>
              </InfiniteScroll>
            </div>
            </>
        )
}

News.defaultProps = {
    country: 'in',
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}