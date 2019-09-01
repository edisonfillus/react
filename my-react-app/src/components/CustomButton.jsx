import React from 'react';


export default class CustomButton extends React.Component {


    render(){
        return (
            <div className="pure-control-group">
                <label></label>
                <input type="submit" className="pure-button pure-button-primary" value={this.props.label} />
            </div>
        ); 
    }
}