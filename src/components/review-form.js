import React from "react";
import Reviews from "./reviews";

export default class reviewForm extends React.Component{
    constructor(){
        super()

        this.reviews = [];
        this.state = {
            showdata: this.reviews,
            input: '',
        }

        this.prependReview = this.prependReview.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

        handleChange = event => {
            let userInput = event.target.value
            this.setState({input: userInput})
        }

        prependReview(){
            if(this.state.input){
            this.reviews.push(<Reviews review={this.state.input}/>)
            this.setState({
                showdata : this.reviews,
                input: ''
            });
        }
        }

    render(){
        return (
            <div>
                <div>
                    {this.reviews}
                </div>
                <br></br>
            <div className="container">
                <div className="row">
                    <input type="text" className="form-control" value={this.state.input} onChange={this.handleChange} placeholder="Join the conversation! Leave a review" ></input>
                </div>
                <div className="text-end mt-1">
                    <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => this.prependReview()}
                    >
                    Add Review
                    </button>
                </div>
            </div>
            </div>
        )
    }
}