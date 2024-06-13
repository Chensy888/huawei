/**
 * @name ExcelUtils Excel的文件操作
 * @author 杨明明
 * @version 1.0.0
 * @description 使用node-xlsx来进行excel的相关操作
 */


const xlsx = require("node-xlsx");
const path = require("path");
const fs = require("fs");
const os = require("os");


const ExcelUtils = {
    /**
     * 读取excel文件，将之转换成js对象
     * @param {string} excelPath excel的文件位置 
     */
    readExcelToJson(excelPath) {
        if (fs.existsSync(excelPath)) {
            let result = xlsx.parse(excelPath);
            let workBook = [];          //工作薄
            for (let sheet of result) {
                let list = [];
                let headerRow = sheet.data[0];
                for (let i = 1; i < sheet.data.length; i++) {
                    let obj = {};
                    let item = sheet.data[i];
                    for (let j = 0; j < item.length; j++) {
                        obj[headerRow[j]] = item[j];
                    }
                    list.push(obj);
                }
                workBook.push(list);
            }
            return workBook;
        }
        else {
            console.log("路径不存在");
            return [];
        }

    },
    /**
     * 将一个数组对象生成excel
     * @param {Array<Object>} list 
     */
    writeExcelFromList(list, excelSavePath) {
        let obj = {
            name: "Sheet1",
            data: []
        }
        let firstObject = list[0];
        if (firstObject) {
            let headerRow = Object.keys(firstObject);
            obj.data.push(headerRow);
            for (let item of list) {
                obj.data.push(Object.values(item));
            }
            let buffer = xlsx.build([obj]);
            if (excelSavePath) {
                fs.writeFileSync(excelSavePath, buffer, { encoding: "utf8" });
            }
            else {
                //没有传保存目录，我们就存到系统的临时目录
                excelSavePath = path.join(os.tmpdir(), `${Date.now()}.xlsx`);
                fs.writeFileSync(excelSavePath, buffer, { encoding: "utf8" });
            }
            //最后将这个excelSavePath返回到外边，这样外边就知道这个excel生成在什么地方
            return excelSavePath;
        }
        else {
            throw new Error("list不能为空");
        }
    }
}

module.exports = ExcelUtils;