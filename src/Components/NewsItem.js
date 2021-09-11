import React, {useState} from 'react'
import { withRouter } from 'react-router';

export default function NewsItem(props) {
        const {title, description, imageUrl, newsUrl, publishedAt, author} = props;
        
        return (
            <div className="my-3" >
                <div className="card ">
                    <img src={imageUrl} className="card-img-top" />
                    <div className="card-body" style={props.newsItemStyle} >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted" > Published by {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} className={`btn btn-${props.btnMode}`}>Read more</a>
                    </div>
                </div>
            </div>
        )
}


