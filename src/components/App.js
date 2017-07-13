import React, { Component } from 'react';

import OptionsDisplay from './OptionsDisplay';
import ResultsMenu from './ResultsMenu';
import SearchBar from './SearchBar';

class App extends Component {
    constructor(){
        super();
        this.onDrugSearch = this.onDrugSearch.bind()
        this.drugFragSearch = this.drugFragSearch.bind()
    }

    onDrugSearch(drugName){
        console.log("onDrugSearch drugName", drugName);
    }

    drugFragSearch(drugNameFragment){
        console.log("drugFragSearch drugNameFragment", drugNameFragment);
    }

    render(){
        return(
            <div className="appDiv">
                <SearchBar 
                    inputPlaceholder = "Drug Name"
                    inputVal="drugName"
                    btnName="Search"
                    funcSearch={this.onDrugSearch}
                    funcInput={this.drugFragSearch}
                />
            </div>
        );
    }
}

export default App;