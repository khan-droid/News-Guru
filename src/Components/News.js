import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
//     articles=[{
// //here articles is an array where we stored the api data which is of data-type object        {
//             "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//             "author": null,
//             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//             "publishedAt": "2020-04-27T11:41:47Z",
//             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//           },
//           {
//             "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//             "author": null,
//             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//             "publishedAt": "2020-03-30T15:26:05Z",
//             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//           }
//     ]
    static defaultProps = {
        country: 'in',
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }
    constructor(){
        super();
        console.log("this is news constructor");
        this.state={
            articles: [],
            loading: false,
            page: 1,
            maxPages: 1,
        }
    }
    //the reason you are using (this.) is because the variable or method is in a class
    
    async updateNews(){
        const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee797f6bbacd42dcba1eeed0f7c4631f&page=${this.state.page}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            maxPages: parseData.totalResults,
            loading: false})//first article denotes the state variable, whereas the second article denotes the article array present in the parsed data
            
    }
    //the reason why we are modifying the state of the component in functions outside the render function is that states can't be modified in the render() function
    async componentDidMount(){
        this.updateNews();
        }
    handleNextPage = async ()=>{
        this.setState({page: this.state.page + 1})
        this.updateNews()
    }
    handlePrevPage = async ()=>{
        this.setState({page: this.state.page - 1})
        this.updateNews()
    }
    render() {
        return (
            <div>
            <div className="container my-3">
                <h1 className="text-center ">News Guru - Headlines from {(this.props.category)}</h1>
                {this.state.loading && <Spinner/>}{/*show spinner component only when this.state.loading is true*/}
                 <div className="row" >
                {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                </div>
              })}
              </div>
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button my-3" disabled={this.state.page<=1?true:false} className="btn btn-primary" onClick={this.handlePrevPage}>Previous</button>
            <button type="button my-3" disabled={this.state.page>=this.state.maxPages/20?true:false}className="btn btn-primary" onClick={this.handleNextPage}>Next</button>
            </div>
            </div>
        )
    }
}
