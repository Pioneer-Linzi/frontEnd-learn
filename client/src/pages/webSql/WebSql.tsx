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

let id = 0;
function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class WebSql extends React.PureComponent {
    public componentDidMount(){
        // @ts-ignore
        const webSqlHelper = new WebSqlHelper();
    }
    public render(){
        return (
        <div id='webSql'>
            <div className="operation">
                <Button
                    variant="contained"
                    color='primary'
                >
                    create websql
                </Button>
            </div>
            <Paper >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>table</TableCell>
                            <TableCell numeric={true}>id</TableCell>
                            <TableCell numeric={true}>log</TableCell>
                            <TableCell numeric={true}>number</TableCell>
                            <TableCell numeric={true}>string</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell numeric={true}>{row.calories}</TableCell>
                                    <TableCell numeric={true}>{row.fat}</TableCell>
                                    <TableCell numeric={true}>{row.carbs}</TableCell>
                                    <TableCell numeric={true}>{row.protein}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
        );
    }
}
export default WebSql;