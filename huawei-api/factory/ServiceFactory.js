
        class ServiceFactory {
            static createAreaService(){ 
                    return Reflect.construct(require("../services/AreaService.js"), []);
                }
static createBaseService(){ 
                    return Reflect.construct(require("../services/BaseService.js"), []);
                }
static createComputerService(){ 
                    return Reflect.construct(require("../services/ComputerService.js"), []);
                }
static createMateService(){ 
                    return Reflect.construct(require("../services/MateService.js"), []);
                }
static createPhoneService(){ 
                    return Reflect.construct(require("../services/PhoneService.js"), []);
                }
static createPrecinctService(){ 
                    return Reflect.construct(require("../services/PrecinctService.js"), []);
                }
        }

        module.exports = ServiceFactory;
    