import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [keyword, setKeyword] = useState('')
    const [newsItemStyle, setNewsItemStyle] = useState({backgroundColor: 'white', color: 'black'})
    const [newsStyle, setNewsStyle] = useState({backgroundColor: 'white', color: 'black'})
    const [btnMode, setBtnMode] = useState('dark')
    const fetchMoreData = async() => {
        const url = ` https://newsapi.org/v2/top-headlines?q=${keyword}&language=en&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page+1}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
      };
    const updateNews = async ()=>{
        props.setProgress(10);
        const url = ` https://newsapi.org/v2/top-headlines?q=${keyword}&language=en&category=${props.category}&apiKey=330bd9cc3b4a42198fdea0251e43bea6&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(100);
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
            <Navbar setNewsStyle={setNewsStyle} setNewsItemStyle={setNewsItemStyle} setBtnMode={setBtnMode}/>
            <div className="container my-3" style={newsStyle}>
            <ScrollToTop smooth color="#6f00ff" />
                <h1 className="text-center" style={{marginTop: '90px'}}>News Guru - Headlines from {(props.category)}</h1>
                {loading && <Spinner/>}{/*show spinner component only when  loading is true*/}
                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner />}
                >
                <div className="container">
                <div className="row" >
                {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title}  newsItemStyle={newsItemStyle} btnMode={btnMode} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
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
    category: 'general',
}

News.propTypes = {
    category: PropTypes.string,
}