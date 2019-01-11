import * as React from 'react'
import './webSql.scss';
import WebSqlHelper from './WebSqlHelper';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/es/Table";
import TableHead from "@material-ui/core/es/TableHead";
import TableRow from "@material-ui/core/es/TableRow";
import TableCell from "@material-ui/core/es/TableCell";
import TableBody from "@material-ui/core/es/TableBody";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/es/Snackbar/Snackbar";




interface IData {
    goodsId:string;
    goodsName:string;
    id:string;
}

interface ITable {
    rows:IData[]
}


class WebSql extends React.PureComponent {
    public state ={
        data : [] as IData[],
        horizontal: 'right',
        open:false,
        vertical:'top',
    }
    private webSqlHelper : WebSqlHelper;
    public handleClose = () => {
        this.setState({
            open:false
        });
    }
    public showMessage = ()=>{
        this.setState({
            open:true
        })
        setTimeout(()=>{
            this.setState({
                open:false
            });
        },1000);
    }
    public createDataBases =() => {
        this.webSqlHelper = new WebSqlHelper();
        this.webSqlHelper.createDb();
        this.showMessage();
    }

    public createTable = ()=>{
        this.webSqlHelper.createTable();
        this.showMessage();
    }

    public insertData = ()=>{
        this.webSqlHelper.insert();
        this.showMessage();
    }
    public update = ()=>{
        this.webSqlHelper.update();
        this.showMessage();
    }
    public delete  = ()=>{
        this.webSqlHelper.delete();
        this.showMessage();
    }
    
    public query= async ()=> {
       const res = await this.webSqlHelper.query() as ITable;
       const arr :IData[] =[];
       for(let i=0;i<res.rows.length;i++){
           // @ts-ignore
           arr.push(res.rows.item(i));
       }
       this.setState({
           data:arr
       })
       this.showMessage();
    }
    public render(){
        const {horizontal,vertical,open,data} = this.state;
        return (
        <div id='webSql'>
            <div className="operation">
                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.createDataBases}
                >
                    create websql databases
                </Button>
                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.createDataBases}
                >
                    create websql tables
                </Button>
                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.insertData}
                >
                    insert data
                </Button>
                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.update}
                >
                    update data
                </Button>
                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.query}
                >
                    query data
                </Button>
            </div>
            <Paper >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Id </TableCell>
                            <TableCell numeric={true}>goodsId</TableCell>
                            <TableCell numeric={true}>goodsName</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell numeric={true}>{row.goodsId}</TableCell>
                                    <TableCell numeric={true}>{row.goodsName}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>

            <Snackbar
                anchorOrigin={{ vertical, horizontal } as SnackbarOrigin}
                open={open}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">I love snacks</span>}
            />
        </div>
        );
    }
}
export default WebSql;