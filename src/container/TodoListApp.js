import { Component } from "react";
import TodoForm from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

export default class TodoListApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    pushToItens = (todo) => {
        const { items } = this.state;
        this.setState({
            items: [...items, todo]
        });
    }

    removeFromItems = (index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({items});
    }

    render() {
        const { items } = this.state;
        //        console.log(this.state.items)
        return (
            <div id="app" className="container">
                <h2>ToDo List</h2>
                <TodoForm pushToItems={this.pushToItens} />
                <hr />
                <TodoList items={items} removeFromItems={this.removeFromItems} />
            </div>

        );
    }
}