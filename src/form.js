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
                list : []
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
        const list = this.state.list.map((Row) => {
        return (<ListRow key={Row.Key} id={Row.Key} checked={Row.checked} content={Row.content} handleCheckBoxChange={this.handleCheckBoxUpdate} />)
        })
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col">
                            <input type="text" value={this.state.tempinput} onChange={this.hanleInputChange} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button type="button" onClick={this.handleSubmit}>Add task</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {list}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Form;