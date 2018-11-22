import * as React from 'react';
import './App.scss';
import Nav from './components/Nav';
import {HashRouter as Router,Route} from "react-router-dom";
// @ts-ignore
import Loadable from 'react-loadable';


const Loading = () => {
    return <div>Loading...</div>
}


const WebWorker = Loadable({
    loader: () => import('./pages/webWorker/WebWorker'),
    loading: Loading,
});
const WebSocket = Loadable({
    loader: () => import('./pages/webSocket/WebSocket'),
    loading: Loading,
});


const App = () => (
    <Router>
        <div className="App">
            <Nav/>
            <Route exact={true} path="/" component={WebWorker}/>
            <Route path="/webWorker" component={WebWorker}/>
            <Route path="/webSocket" component={WebSocket}/>
        </div>
    </Router>
);
export default App;
