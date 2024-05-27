const express = require("express");
require("express-async-errors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const cors = require("cors");
const buildServiceFactory = require("./factory/buildServiceFactory");
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));

const bodyParser = require("body-parser");
const ResultJson = require("./model/ResultJson");
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/stu_photo", express.static(path.join(__dirname, "./stu_photo")));
app.use("/teacher_photo", express.static(path.join(__dirname, "./teacher_photo")));
app.use("/exportExcelFile", express.static(path.join(__dirname, "./exportExcelFile")));


//加载路由
require("./utils/loadRoutes")(app);

/**
 * 全局异常处理的中间件
 */
app.use((err, req, resp, next) => {
    resp.status(500).json(new ResultJson(false, err.message));
    next();
});


server.listen(4201, "0.0.0.0", () => {
    console.log("服务器启动成功，端口4201");
    buildServiceFactory();
    console.log("服务工厂生成完成");
})