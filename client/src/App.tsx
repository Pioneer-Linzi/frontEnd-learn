import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import WebWorker from './pages/webWorker/WebWorker';
import WebSocket from './pages/webSocket/WebSocket';
import {BrowserRouter as Router,Route} from "react-router-dom";

const App = () => (
    <Router>
        <div className="App">
            <div>app</div>
            <Header/>
            <Nav/>
            <Route exact={true} path="/" component={WebWorker}/>
            <Route path="/webWorker" component={WebWorker}/>
            <Route path="/webSocket" component={WebSocket}/>
        </div>
    </Router>
);
export default App;
