import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div class="card" >
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%' , zIndex:'1'}}>{source}</span>
            <img src={imageUrl} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}...</h5>
                <p class="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {author?author:"anonymous"} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" class="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
