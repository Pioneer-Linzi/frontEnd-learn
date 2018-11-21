import * as React from 'react'
import './nav.css';
import {Link} from "react-router-dom";

class Nav extends React.PureComponent {
    public render(){
        return (
        <div className='nav'>
            <nav>
                <ul>
                    <li>
                        <Link  to='/'>webworker</Link>
                    </li>
                    <li>
                        <Link  to='/webWorker'>webworker</Link>
                    </li>
                    <li>
                        <Link  to='/webSocket'>webworker</Link>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}
export default Nav;