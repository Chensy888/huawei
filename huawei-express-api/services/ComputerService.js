/**
 * 数据表cost_detail_info的操作
 */
const BaseService = require('./BaseService');

class ComputerService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.computer;
    }

}

module.exports = ComputerService;