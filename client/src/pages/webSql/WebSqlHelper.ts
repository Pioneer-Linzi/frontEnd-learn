
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
            tx.executeSql("create table goods (id,goods_id,spec_id,user_id,order_id,status,create_time,update_time)");
        });
    }
    public query() {
        this.db.transaction((tx: any) => {
            tx.executeSql('select * from goods');
        });
    }

    public insert() {
        this.db.transaction((tx: any) => {
            tx.executeSql('insert into goods (id,goods_id,spec_id,user_id,order_id,status,create_time,update_time) values ("1","100","1001","use_id01","order_id001","未付款","2018年11月28日","2018年11月28日")');
        });
    }

    public delete() {
        this.db.transaction((tx: any) => {
            tx.executeSql('delete from goods where id ="1"');
        });
    }

    public update() {
        this.db.transaction((tx: any) => {
            tx.executeSql('update goods set status ="已付款" where id = "1" ');
        });
    }

    public executeSql() {
        this.db.transaction((tx: any) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }
}