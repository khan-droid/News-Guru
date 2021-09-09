import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    
    const updateNews = async ()=>{
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles)
        setMaxPages(parseData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews();
    },[])
    const handleNextPage = async ()=>{
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page+1}`;
        setLoading(true);
        setPage(page+1)
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles)
        setLoading(false)
    }
    const handlePrevPage = async ()=>{
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page-1}`;
        setLoading(true);
        setPage(page-1)
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles)
        setLoading(false)
    }
        return (
            <div>
            <div className="container my-3">
                <h1 className="text-center" style={{marginTop: '90px'}}>News Guru - Headlines from {(props.category)}</h1>
                {loading && <Spinner/>}{/*show spinner component only when  loading is true*/}
                 <div className="row" >
                {! loading && articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                </div>
              })}
              </div>
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button my-3" disabled={ page<=1?true:false} className="btn btn-primary" onClick={handlePrevPage}>Previous</button>
            <button type="button my-3" disabled={page>=maxPages/20?true:false}className="btn btn-primary" onClick={handleNextPage}>Next</button>
            </div>
            </div>
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