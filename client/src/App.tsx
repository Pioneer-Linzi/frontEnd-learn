import * as React from 'react';
import './App.scss';
import Nav from './components/Nav';
import {HashRouter as Router,Route} from "react-router-dom";
// @ts-ignore
import Loadable from 'react-loadable';
import connect from './connect';


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

const WebSql = Loadable({
    loader: () => import('./pages/webSql/WebSql'),
    loading: Loading,
});



class App extends React.Component {
    public render(){
        // @ts-ignore
        return (
            <Router>
            <div className="App">
                <div className='main'>
                    <Nav/>
                    <Route exact={true} path="/" component={WebWorker}/>
                    <Route path="/webWorker" component={WebWorker}/>
                    <Route path="/webSocket" component={WebSocket}/>
                    <Route path="/WebSql" component={WebSql}/>
                </div>
            </div>
        </Router>)
    }
}

export default connect(App);
