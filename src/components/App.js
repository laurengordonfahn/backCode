import React, { Component } from 'react';

import OptionsDisplay from './OptionsDisplay';
import ResultsMenu from './ResultsMenu';
import SearchBar from './SearchBar';

import * as api from '../api';

class App extends Component {
    constructor(){
        super();
        // this.queryAutoCompleteTerms = this.queryAutoCompleteTerms.bind(this);
        this.onDrugSearch = this.onDrugSearch.bind(this);
        this.ondrugFragSearch = this.ondrugFragSearch.bind(this);
        this.onDrugFragmentSearchSuccess = this.onDrugFragmentSearchSuccess.bind(this);
    }

    // componentWillMount(){
    //     this.queryAutoCompleteTerms()
    // }

    // queryAutoCompleteTerms(){
    //     api.autoCompleteTerms()
    //         .then(response => console.log(response))
    // }

    onDrugSearch(drugName){
        console.log("onDrugSearch drugName", drugName);
    }

    /// SearchBar Auto Complete Functions /////
    onDrugFragmentSearchSuccess(response){
        console.log("onDrugFragmentSearchSuccess response", response);
    }

    ondrugFragSearch(drugNameFragment){
        console.log("drugFragSearch drugNameFragment", drugNameFragment);

        api.drugFragmentSearch(drugNameFragment)
            .then(response => this.onDrugFragmentSearchSuccess(response))
    }

    render(){
        return(
            <div className="appDiv">
                <SearchBar 
                    inputPlaceholder = "Drug Name"
                    inputVal="drugName"
                    btnName="Search"
                    funcSearch={this.onDrugSearch}
                    funcInput={this.ondrugFragSearch}
                />
            </div>
        );
    }
}

export default App;