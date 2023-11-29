import { Component } from "react";
import TodoForm from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { Message, WelcomeMessage } from "../components/Message";

export default class TodoListApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data});
            } );
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
        return (
            <div id="app" className="container">
                <WelcomeMessage />
                <TodoForm pushToItems={this.pushToItens} />
                <hr />
                <TodoList items={items} removeFromItems={this.removeFromItems} />
            </div>

        );
    }
}