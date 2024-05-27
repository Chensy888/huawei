const ResultJson = require('../model/ResultJson');
const APPConfig = require('../config/APPConfig');
const jwt = require('jsonwebtoken');
const permissionCheck = (req, resp, next) => {
      //拦截判断是否携带token
      let token = req.headers["authorization"];
      if (token) {
            //token验证
            token = token.replace("Bearer ", "");
            // console.log(token);
            try {
                  let decode = jwt.verify(token, APPConfig.privateKey);
                  req.user = decode;
                  next();
            } catch (error) {
                  //验证失败
                  resp.status(401).json(new ResultJson(false, "token失效"));
            }
      }
      else {
            resp.status(401).json(new ResultJson(false, "请求未授权"));
      }
}

module.exports = permissionCheck;