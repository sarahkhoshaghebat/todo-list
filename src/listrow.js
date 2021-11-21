import  React,{ Component } from "react";
import './App.css';


export default class ListRow extends Component {
    render() {
        let x = {};
        if (this.props.checked === true) {
            x = {
                textDecoration: 'line-through'
            }
        }
        return(
            <div>
                <label style={x}>
                    <div>
                        <input type="checkbox" checked={this.props.checked} onChange={() => this.props.handleCheckBoxChange(this.props.id)} />
                        {this.props.content}
                    </div>
                </label>
            </div>
        )
    }
}

