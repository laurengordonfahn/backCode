import React, { Component } from 'react';

import OptionsDisplay from './OptionsDisplay';
import ResultsMenu from './ResultsMenu';
import SearchBar from './SearchBar';

class App extends Component {
    render(){
        return(
            <div className="appDiv">
                <SearchBar />
            </div>
        );
    }
}

export default App;