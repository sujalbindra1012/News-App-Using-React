import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello, I am a constructor from the News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    console.log("CDM");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5779cb500dbf47e9a3dd3dfc195aab62&page=1&pageSize=20";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5779cb500dbf47e9a3dd3dfc195aab62&page=${this.state.page - 1}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5779cb500dbf47e9a3dd3dfc195aab62&page=${this.state.page + 1}&pageSize=20`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
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
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
