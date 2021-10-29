import  React,{ Component } from "react";
import './App.css';
import UUID from "uuid/"
import { v4 as UUID } from 'uuid';
uuidv4();


class Main extends Component {
    constructor(){
    super()
    this.state ={
        list:[],
        tempinput: " "
    }    
}

  handleSubmit = (event) => {
    let newList ={
        key: UUID(),
        content: this.state.tempinput,
        checked: false
    }  
    let templist = []
    if(this.state.list) {
        templist = this.state.list
    }
    templist.push(newList)
    this.setState({
        list: templist,
        templist:''
    })
    
    event.preventDefault()
    
  }

  handleInputChange= (event) => {
    this.setState({
        tempinput: event.target.value
    })
  }

    render() {
        return(
            <>
                <div className="container-fluid">
                    <div className="row menu">
                        <div className="col mt-5">
                            <ul>
                                <li className="list-menu mt-2">
                                    <a href="/#" className="a-menu">
                                    <span aria-hidden="true" className="item_icon"><svg width="24" height="24" color="#0000FF" viewBox="0 0 24 24"><g fill="currentColor" fillRule="nonzero">
                                        <path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1"></path><path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path></g></svg></span>
                                    <span>
                                        Inbox
                                    </span>
                                    </a>
                                </li>
                                <li className="list-menu mt-2">
                                    <a href="/#" className="a-menu">
                                    <span aria-hidden="true" className="item_icon"><svg width="24" color="#228B22" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd">
                                        <path fillRule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path><path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize="9" transform="translate(4 2)" fontWeight="500"><tspan x="8" y="15" textAnchor="middle">15</tspan></text></g></svg></span>
                                    <span>
                                        Today
                                    </span>
                                    </a>
                                </li>
                                <li className="list-menu mt-2">
                                    <a href="#/" className="a-menu">
                                    <span aria-hidden="true" className="item_icon"><svg width="24" color="#9932CC" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillRule="nonzero"><path d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z" opacity="0.1"></path>
                                        <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path></g></svg></span>
                                        <span>
                                            Upcoming
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col">
                                <h3>Inbox</h3>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}


export default Main;