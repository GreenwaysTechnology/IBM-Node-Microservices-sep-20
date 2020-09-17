
//exports = pack code inside literal object and return
//module.exports returns the code as it returns

/**
 *  function require(fileName){
 *    ///loader code
 *   //vericaiton - exports or module.exports
 *  
 *    if(exports){
 *      let exports = {}
 *      return exports
 *    }
 *    let a =100;
 * 
 *    module.exports = a;
 * 
 *    return module.exports
 * 
 *  }
 */

class EmployeeService {
    constructor() {
        console.log('Employee service is being initialized')
    }
    findAll() {
        return 'findAll';
    }

}
module.exports = EmployeeService;