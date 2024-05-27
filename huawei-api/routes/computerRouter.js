const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
router.currentService = ServiceFactory.createComputerService();

router.get("/getListByPage", async (req, resp) => {
      let pageList = await ServiceFactory.createComputerService().getAllList(req.query);
      resp.json(new ResultJson(true, "获取成功", pageList));

});


module.exports = router;