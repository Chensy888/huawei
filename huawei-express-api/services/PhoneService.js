/**
 * 数据表cost_detail_info的操作
 */
const BaseService = require('./BaseService');

class PhoneService extends BaseService {
    constructor(){
        super();
        this.currentTable = this.tableMap.phone;
    }
}

module.exports = PhoneService;