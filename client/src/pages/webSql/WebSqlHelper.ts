
export default class WebSqlHelper{
    /*
        openDatabase() 打开已存在数据库，数据库不存在 则创建一个数据库，
     */
    // @ts-ignore
    private db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

    public query(){
        this.db.transaction((tx:any)=> {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }

    public insert() {
        this.db.transaction((tx:any)=> {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }

    public delete(){
        this.db.transaction((tx:any)=> {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }

    public update(){
        this.db.transaction((tx:any)=> {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }

    public executeSql(){
        this.db.transaction((tx:any)=> {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }
}