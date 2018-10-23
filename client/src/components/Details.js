import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
@withRouter
export default class Details extends Component {

    render() {
        const { match } = this.props; 
        const { list } = this.props.store
        const detail = list.filter(item => 
            {
                
                return item.id.toString() === match.params.id
            }
            
        )
        console.log("match", match);
        
        return (
            <div>
                {!!detail.length && detail[0].description}
            </div>
        )
    }
}
