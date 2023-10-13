import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
    }

    constructor() {
        super();
        console.log("running")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            Apikey: "38dead3a373c43ad8874ccfa225d848a",
            totalResult: 0
            // ApiKey: "f88609299dbc48139e350bfb0054d5fe",
        }
    }
    async componentDidMount() {
        try {
            let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.Apikey}&page=1&pageSize=10`;


            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json();

            this.setState({
                articles: parseData.articles,
                totalResult: parseData.totalResults,
                loading: false
            })
        }
        catch {
            console.log("not responding")
        }
    }

    handlePre = async () => {
        try {
            console.log("previous");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.Apikey}&page=${this.state.page - 1}&pageSize=10`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData)

            this.setState({
                page: this.state.page - 1,
                articles: parseData.articles,
                loading: false
            })
        }
        catch {
            console.log("not responding")
        }
    }

    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResult / 10)) {

        }
        else {
            try{
            console.log(this.state.totalResult)
            console.log("next");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.Apikey}&page=${this.state.page + 1}&pageSize=10`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData)

            this.setState({
                loading: false,
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
        catch{
            console.log("not responding")
        }
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>News Monkey's Top headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row' >
                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.description ? element.urlToImage : ""} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between fixed-bottom'>

                    <button type="button" className="btn btn-info" onClick={this.handlePre} disabled={this.state.page <= 1} style={{ marginBottom: "20px" }}>&larr; Previous</button>
                    <button type="button" className="btn btn-info" style={{ width: "50px", height: "40px" }}>{this.state.page}</button>
                    <button type="button" className="btn btn-info" onClick={this.handleNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 10)} style={{ marginBottom: "20px" }}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
