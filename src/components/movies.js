import React from "react";
import Rating from "./rating";
import ReviewForm from "./review-form";

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            reviews: props.reviews
        }
    }
    
    render(){
        return(
            <div className="row shadow-lg">
                <div className="col col-2 ">
                    <div className="row">
                        <img src={this.props.posterUrl} alt={this.props.name +" Movie Poster"}  ></img>
                    </div>
                    <div className="row text-center">
                        <h5>{this.props.name}</h5>
                    </div>
                    <div className="row text-center">
                        <Rating />
                    </div>
                </div>
                <div className="col mb-1">
                    <div className="row">
                        <strong>Summary:</strong>
                        <p>{this.props.summary}</p>
                    </div>
                    <ReviewForm />
                </div>
            </div>
        )
    }
}