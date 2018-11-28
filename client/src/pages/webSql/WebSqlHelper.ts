
export default class WebSqlHelper {

    private dbName = 'react-websql';
    private dbVersion = '1.0';
    private dbDesc = 'react learn websql ';
    private dbLargin = 2 * 1024 * 1024;
    /*
        openDatabase() 打开已存在数据库，数据库不存在 则创建一个数据库，
     */
    // @ts-ignore

    private db: any;

    public createDb() {
        // @ts-ignore
        this.db = openDatabase(this.dbName, this.dbVersion, this.dbDesc, this.dbLargin);
    }

    public createTable() {
        this.db.transaction((tx: any) => {
            tx.executeSql("drop table goods ");
            tx.executeSql("create table goods (id unique,goodsName,goodsId)");
        });
    }
    public query() {
        return new Promise((resolve,reject)=>{
            this.db.transaction((tx: any) => {
                tx.executeSql('select * from goods',[],(txs:any,results:any)=> {
                    resolve(results);
                });
            });
        });
    }

    public insert() {
        this.db.transaction((tx: any) => {
            tx.executeSql('insert into goods (id,goodsName,goodsId) values (21,"100","sony a45")');
        });
    }

    public delete() {
        this.db.transaction((tx: any) => {
            tx.executeSql('delete from goods where id ="1"');
        });
    }

    public update() {
        this.db.transaction((tx: any) => {
            tx.executeSql('update goods set goodsName ="已付款" where id = "1" ');
        });
    }

    public executeSql() {
        this.db.transaction((tx: any) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }
}