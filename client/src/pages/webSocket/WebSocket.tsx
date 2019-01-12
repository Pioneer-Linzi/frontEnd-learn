import * as React from 'react'
import './webSocket.css';
// @ts-ignore
import io from 'socket.io-client';

class WebSocket extends React.PureComponent {
    public componentDidMount() {
        const socket = io('http://localhost:3001/websockets');
        socket.on('server',(res:any)=>{
            console.log(res)
        });
    }
    public render(){
        return (
        <div className='webSocket'>
            <p>webSocket</p>
        </div>
        );
    }
}
export default WebSocket;