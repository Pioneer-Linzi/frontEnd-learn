import * as React from 'react';
import './App.scss';
import Nav from './components/Nav';
import {HashRouter as Router,Route} from "react-router-dom";
// @ts-ignore
import Loadable from 'react-loadable';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";


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


class App extends React.Component {
    public state = {
        buffer: 10,
        completed: 0,
    }
    public render(){
        const {completed} = this.state;
        const {buffer} =this.state;
        return (
            <Router>
            <div className="App">
                <LinearProgress className='linearProgress' variant="buffer" value={completed} valueBuffer={buffer} />
                <div className='main'>
                    <Nav/>
                    <Route exact={true} path="/" component={WebWorker}/>
                    <Route path="/webWorker" component={WebWorker}/>
                    <Route path="/webSocket" component={WebSocket}/>
                </div>
            </div>
        </Router>)
    }
}

export default App;
