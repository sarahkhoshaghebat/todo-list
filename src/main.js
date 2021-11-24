import  React,{ Component } from "react";
import './App.css';
import Form from "./form";


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false
        } ;
    }
    show = () => {
        this.setState({
        showForm: !this.state.showForm
        });
        console.log(this.state.showForm);
    }
    
    render() {
        let form = this.state.showForm ? <Form onClose={this.show}/> : null;
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row menu">
                                <div className="col mt-5 margin-menu">
                                    <div className="row ml-5">
                                        <div className="col hover list-menu mt-2">
                                            <button className="b-menu hover">
                                                <span aria-hidden="true" className="item_icon"><svg width="24" height="24" color="#0000FF" viewBox="0 0 24 24"><g fill="currentColor" fillRule="nonzero">
                                                    <path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1"></path><path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path></g></svg></span>
                                                <span>
                                                    Inbox
                                                </span>
                                            </button>
                                        </div>
                                        <div className="row list-menu mt-2">
                                            <div className="col hover">
                                                <button className="b-menu hover">
                                                    <span aria-hidden="true" className="item_icon"><svg width="24" color="#228B22" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd">
                                                        <path fillRule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path><path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize="9" transform="translate(4 2)" fontWeight="500"><tspan x="8" y="15" textAnchor="middle">15</tspan></text></g></svg></span>
                                                    <span>
                                                        Today
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row list-menu mt-2">
                                            <div className="col hover">
                                                <button className="b-menu hover">
                                                    <span aria-hidden="true" className="item_icon"><svg width="30" color="#9932CC" height="30" viewBox="0 0 24 24"><g fill="currentColor" fillRule="nonzero"><path d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z" opacity="0.1"></path>
                                                        <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path></g></svg></span>
                                                    <span>
                                                        Upcoming
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                            <div className="row">
                                <div className="col mt-5">
                                    <h4>Inbox</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="main-button" onClick={this.show}>
                                        <span className="icon_add" aria-hidden="true">
                                        <svg className="img-plus-main" width="15" height="15"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fillRule="evenodd"></path></svg></span>
                                        <span>Add task</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {form}
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


