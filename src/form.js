import  React,{ Component } from "react";
import './App.css';
import { v4 as UUID } from 'uuid';
import { Key } from "react";
import ListRow from "./listrow";

class Form extends Component {
    constructor() {
        super()
            this.state= {
                tempinput: '',
                
            }
    }

    handleSubmit =(event) => {
        let newList = {
            kry : UUID(),
            content : this.state.tempinput,
            checked : false
        }

        let templist = []
        if(this.state.list){
            templist = this.state.list
        }

        templist.push(newList)
        this.setState({
            list: templist,
            tempinput: ''
        })
        
        event.preventDfault()
    }

    hanleInputChange = (event) => {
        this.setState ({
            tempinput: event.target.value
        })
    }

    handleCheckBoxUpdate = () => {
        this.setState((prevstate) =>{
            let newlist = prevstate.list.map((Row) => {
                if(Row.Key === Key) {
                    Row.checked = !Row.checked;
                }
                return Row
            })
            return {
                list: newlist
            }
        })
    }

    render() {
        
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.tempinput} onChange={this.hanleInputChange} />
                    <button type="submit">Add task</button>
                </form>
            </React.Fragment>
        );
    }
}


export default Form;