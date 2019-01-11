import * as React from 'react'
import './dataPush.css';

class DataPush extends React.PureComponent {

    public state ={ 
        date:''
    }
    public componentDidMount() {
        // while(true){
            setInterval(()=>{
                this.getPushData()
            },100);
        // }
    }
    public async getPushData(){
        const res = await fetch('/api/dataPush')
        const data = await res.json()
        console.log(data);
        this.setState({date:data.date})
    }
    public render(){
        const {date} = this.state;
        return (
        <div className='webSocket'>
            <p>{date}</p>
        </div>
        );
    }
}
export default DataPush;