const BaseService = require('./BaseService');

class AreaService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.area;
    }

}

module.exports = AreaService;