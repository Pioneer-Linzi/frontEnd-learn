import * as React from 'react';
import './App.scss';
// @ts-ignore
import Nav from './components/Nav';
// @ts-ignore
import WebWorker from './pages/webWorker/WebWorker';
// @ts-ignore
import WebSocket from './pages/webSocket/WebSocket';
import {HashRouter as Router,Route} from "react-router-dom";


function lazyLoadComponent(lazyModule:any) {
    return (location:any, cb:any) => {
        lazyModule((module:any) => cb(null, module.default));
    }
}


const App = () => (
    <Router>
        <div className="App">
            <Nav/>
            <Route exact={true} path="/" getComponent={lazyLoadComponent(WebWorker)} />
            <Route path="/webWorker" getComponent={lazyLoadComponent(WebWorker)} />
            <Route path="/webSocket" getComponent={lazyLoadComponent(WebSocket)}/>
        </div>
    </Router>
);
export default App;
