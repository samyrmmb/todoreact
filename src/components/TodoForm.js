import { Component } from "react";


class TodoForm extends Component {
    constructor(props) {
        super(props)
        //        console.log(`TodoForm.js PROPS: ${props}`);
        this.state = {
            todo: ''
        };
    }

    onAdd = (e) => {
        e.preventDefault();
        const { todo } = this.state;
        if (todo) {
            this.props.pushToItems(this.state.todo);
            this.setState({
                todo: ''
            });
        }
    };

    onChange = (e) => {
        this.setState({ todo: e.target.value });
    };


    render() {
        const { todo } = this.state;
        return (
            <div>
                <form class="row g-2 align-items-center">
                    <div className="col-sm-7">
                        <input type='text' className="form-control" value={todo} name='todo' id='todo' placeholder='Enter todo here' onChange={this.onChange} />
                    </div><div className="col-sm">
                        <button type='button' className="btn btn-success" onClick={this.onAdd}>Create</button>
                    </div>
                </form>
            </div >
        );
    }
}

export default TodoForm;

