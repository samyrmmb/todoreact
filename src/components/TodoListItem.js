import { Component } from "react";

export default class TodoListItem extends Component{

    onRemove = () => {
        this.props.removeFromItems(this.props.index);

    }

    render() {
        const { item } = this.props;
        return (
            <li className="list-group-item">
                {item} 
                <button type="button" className="btn btn-danger" onClick={this.onRemove}>X</button>
             </li>
        );
    }
}