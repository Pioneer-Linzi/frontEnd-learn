import * as React from 'react'
import './cssBase.scss';

class CssBase extends React.PureComponent {
    public render(){
        return (
        <div className='cssBase'>
            <div className="box"/>
            <nav>
                <ul>
                    <li>
                        <span>first</span>
                        <span>last</span>
                    </li>
                    <li>
                        <span>Menu</span>
                        <span>菜单</span>
                    </li>
                    <li>
                        <span>Admin</span>
                        <span>管理</span>
                    </li>
                    <li>
                        <span>About</span>
                        <span>关于我们</span>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}
export default CssBase;