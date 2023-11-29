import { Component } from "react";
import TodoForm from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { WelcomeMessage } from "../components/Message";
import { getTodos } from "../API";

export default class TodoListApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    async componentDidMount(){
        const { data } = await getTodos();
        this.setState({ items: data});
        
        
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({ items: data});
        //     } );
    }


    pushToItens = (todo) => {
        const { items } = this.state;
        const todoTemp = { title: todo}
        this.setState({
            items: [...items, todoTemp]
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