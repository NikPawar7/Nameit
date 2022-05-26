import React, { useState } from "react";
import Header from '../Header/Header';
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer"
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText, setHeaderText] = useState("Name it!");
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        console.log(inputText);
        setHeaderExpanded(!(inputText));
        setSuggestedNames(inputText ? name(inputText): []);
    }


    return (
        <div>
            <Header headerTitle = {headerText} headerExpanded = {headerExpanded} />                
            <SearchBox onInputChange = {handleInputChange} />
            <ResultContainer suggestedNames = {suggestedNames} />
        </div>
    );
}
// class App extends React.Component {
//     state = {
//         headerText: "Name it!",
//         headerExpanded: true,
//         suggestedNames: []
//     };

//     handleInputChange = (inputText) => {

//         this.setState({ 
//             headerExpanded : !(inputText),
//             suggestedNames : inputText ? name(inputText) : [],
//         });
//     }

//     render() {
//         console.log(this.state.headerExpanded)
//         return (
//             <div>
//                 <Header 
//                     headerTitle = {this.state.headerText}
//                     headerExpanded = {this.state.headerExpanded}
//                 />                
//                <SearchBox onInputChange = {this.handleInputChange}/>
//                <ResultContainer suggestedNames = { this.state.suggestedNames }/>
//             </div>
//         );
//     }
// }

export default App;