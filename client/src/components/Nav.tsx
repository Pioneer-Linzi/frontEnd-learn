import * as React from 'react'
import './nav.scss';
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";


class Nav extends React.Component {
    public state = {
        selected:0
    };
    public clickSelect(selectedId: number):void{
        this.setState({selected:selectedId})
    }
    public render(){
        return (
        <div className='nav'>
            <Divider />
            <List>
                {['webWorker', 'webSocket', 'Drafts'].map((text, index) => (
                    <Link to={'/'+text} key={text}>
                        <ListItem button={true}  selected={this.state.selected===index} onClick={ this.clickSelect.bind(this,index)}  >
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </div>
        );
    }
}
export default Nav;