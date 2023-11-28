//import { Component } from "react";
import TodoListItem from "./TodoListItem";


// 1 Forma
//export default class TodoList extends Component {
//    constructor(props) {
//        super(props)
//    }
//
//    render() {
//        return (
//            <ul>
//
//            </ul>
//        );
//    }
//}


// 2 Forma

export const TodoList = (props) => {
    const {items, removeFromItems} = props
    return (
        <ul className="list-group">
            { items.map((item, index) => (
                <TodoListItem key={index} item={item} index={index} removeFromItems={removeFromItems} />
            ))}
        </ul>
    )
}

