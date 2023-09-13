import React, { Component } from 'react'
import Newsitem from '../Newsitem'

export class News extends Component {

    constructor() {

        super();
        console.log("hello world")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            Apikey: "38dead3a373c43ad8874ccfa225d848a",
            // ApiKey: "f88609299dbc48139e350bfb0054d5fe",
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-11&to=2023-09-11&sortBy=popularity&apiKey=${this.state.Apikey}&page=1&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({ articles: parseData.articles })
    }
  
    handlePre = async () => {
        console.log("previous");
        let url =  `https://newsapi.org/v2/everything?q=apple&from=2023-09-11&to=2023-09-11&sortBy=popularity&apiKey=${this.state.Apikey}&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }

    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(100 / 20)) {
            
        }
        else {
            console.log("next");
            let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-11&to=2023-09-11&sortBy=popularity&apiKey=${this.state.Apikey}&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData)

            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>News Monkey's Top headlines</h1>
                <div className='row' >
                    {this?.state?.articles?.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.description ? element.urlToImage : ""} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between fixed-bottom'>

                    <button type="button" className="btn btn-info" onClick={this.handlePre} disabled={this.state.page <= 1} style={{ marginBottom: "20px" }}>&larr; Previous</button>
                    <button type="button" className="btn btn-info" style={{ width: "50px", height: "40px" }}>{this.state.page}</button>
                    <button  type="button" className="btn btn-info" onClick={this.handleNext} disabled={this.state.page + 1 > Math.ceil(100 / 20)} style={{ marginBottom: "20px" }}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
