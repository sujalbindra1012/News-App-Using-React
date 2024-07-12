import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello, I am a constructor from the News component");
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    console.log("CDM");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5779cb500dbf47e9a3dd3dfc195aab62";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <h2>Loading...</h2>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
