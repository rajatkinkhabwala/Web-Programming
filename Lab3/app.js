const bluebird = require("bluebird");
const textmetrics = require("./textMetrics");
const filedata = require("./fileData");
const fs = bluebird.promisifyAll(require("fs"));

async function main(fileName) {
    try{
        let path = fileName.split();
        let jsonFile = fs.existsSync(path[0]+".result.json");
        let jsonFileName = path[0]+".result.json";
        if(jsonFile){
            let jsonData = await filedata.getFileAsJSON(jsonFileName);
            if(jsonData){
                console.log(jsonData);
            }
        }
        else{
            let text = await filedata.getFileAsString(fileName);
            let simplifiedText = textmetrics.simplify(text);
            let checkPath = fileName.split(".");
            let path1 = checkPath[0]+".debug.txt";
            filedata.saveStringToFile(path1, simplifiedText);
            let metrics = textmetrics.createMetrics(simplifiedText);
            await filedata.saveJSONToFile(jsonFileName,metrics);
            if(fs.existsSync(jsonFileName)){
                let jsonData = await filedata.getFileAsJSON(jsonFileName);
                if(jsonData){
                    console.log(jsonData);
                }
            }
            }
        }
        catch(err){
            console.log(err);
        }
    }
main('chapter1.txt');
main('chapter2.txt');
main('chapter3.txt');