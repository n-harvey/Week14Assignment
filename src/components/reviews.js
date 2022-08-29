import React from "react";

export default class reviews extends React.Component{
    
    render(){
        return(
            <div>
                <p className="border ps-2" > {this.props.review}</p>
            </div>
        )
    }
}
    
