import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(){
        super();
        this.handleForm = this.handleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleForm(e) {
        e.preventDefault();

        const inputVal = this.props.inputVal;
        const nameSearched = this.inputVal.value;

        this.props.funcSearch(nameSearched);
    }

    handleChange() {
        console.log("handleChange");
    }

    render(){
        const inputVal = this.props.inputVal;

        return(
            <div className="searchBarDiv">
                <form
                    id={inputVal}
                    className="searchBarForm"
                    onSubmit={e => {
                        this.handleForm(e);
                    }}
                >

                    <input
                        className="searchBarInput"
                        type="text"
                        placeholder={this.props.inputPlaceholder}

                        ref={(input) =>{
                            this.inputVal = input;
                        }}

                        onChange={e =>{
                            this.handleChange(e);
                        }}
                    />

                    <input 
                        className="searchBarSubmit"
                        type="submit"
                        value={this.props.btnName}
                    />

                </form>
            </div>
        );
    }
}

export default SearchBar;