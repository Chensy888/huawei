const BaseService = require('./BaseService');

class PrecinctService extends BaseService {
    constructor(){
        super();
        this.currentTable = this.tableMap.precinct;

    }
}

module.exports = PrecinctService;