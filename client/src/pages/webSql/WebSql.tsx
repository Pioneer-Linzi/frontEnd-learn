import * as React from 'react'
import './webSql.scss';
import WebSqlHelper from './WebSqlHelper';

class WebSql extends React.PureComponent {
    public componentDidMount(){
        // @ts-ignore
        const webSqlHelper = new WebSqlHelper();
    }
    public render(){
        return (
        <div id='webSql'>
            <p>websql</p>
        </div>
        );
    }
}
export default WebSql;