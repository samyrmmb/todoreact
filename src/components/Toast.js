import { Component } from "react";

export default class Toast extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({visible: false});
        }, this.props.delay)
    }

    render(){
        const { message } = this.props;

        return (
            <div>
                { this.state.visible ? <h4>{message}</h4> : <span />}
            </div>
        );
    }
}