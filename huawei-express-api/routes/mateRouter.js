const express = require('express');
const ResultJson = require('../model/ResultJson');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
router.currentService = ServiceFactory.createMateService();

router.get("/getListByPage", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().getAllList(req.query);
      resp.json(new ResultJson(true, "获取成功", pageList));

}); 
router.get("/sortByComment", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().sortByComment(req.query);
      resp.json(new ResultJson(true, "获取成功", pageList));

});
router.get("/sortByPrice/:minprice/:maxprice", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().sortByPrice(req.params);
      resp.json(new ResultJson(true, "获取成功", pageList));
});
router.get("/sortListByPage/:pageIndex/:pageSize", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().getPageList(req.params.pageIndex, req.params.pageSize);
      resp.json(new ResultJson(true, "获取成功", pageList));
});

module.exports = router;