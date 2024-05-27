/**
 * 数据表cost_detail_info的操作
 */
const PageList = require('../model/PageList');
const BaseService = require('./BaseService');


class MateService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.mate;
    }
    sortByComment(){
        let sql = `select * from ${this.currentTable} where is_del = false order by comment desc`;
        return this.executeSql(sql);
    }
    sortByPrice({minprice,maxprice}){
        let sql = `select * from ${this.currentTable} where is_del = false and price between ? and ? order by price desc`;
        return this.executeSql(sql,[minprice,maxprice]);
    }
    //实现分页方法
    getPageList(pageIndex, pageSize) {
        let sql = `select * from ${this.currentTable} where is_del = false order by id desc limit ?,?`;
        return this.executeSql(sql, [(pageIndex - 1) * pageSize, pageSize]).then(res => {
            return this.getTotalCount().then(totalCount => {
                return new PageList(pageIndex, totalCount, res);
            })
        })
    }
}

module.exports = MateService;