import React from 'react';


export default class CustomSelect extends React.Component {


    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select id={this.props.id} name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                    <option value="">Selecione</option>
                    {
                        this.props.list.map(function (item) {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            )
                    })
                }
                </select>
                <span className="error">{this.props.errorMsg}</span>
            </div >
        );
    }
}