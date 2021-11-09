import  React,{ Component } from "react";
import './App.css';


class ListRow extends Component {
    render() {
        let x = {};
        if (this.props.checked === true) {
            x = {
                textDecoration: 'line-through'
            }
        }
        return(
            <label style={x}>
                <div>
                    <input type="checkbox" checked={this.props.checked} onChange={() => this.props.handleCheckBoxChange(this.props.id)} />
                    {this.props.content}
                </div>
            </label>
        )
    }
}

export default ListRow;