const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

let filedata = exports = module.exports;
module.exports.getFileAsString = getFileAsString;
module.exports.getFileAsJSON = getFileAsJSON;
module.exports.saveStringToFile = saveStringToFile;
module.exports.saveJSONToFile = saveJSONToFile;

async function getFileAsString(path) {
    try{
        if(!path){  
            throw "file name is not provided for getting file as string";
        }
        const data = await fs.readFileAsync(path,"UTF-8");
        return data;
    }catch(err){
        console.log(err);
    }
};

async function getFileAsJSON(path){
    try{
        if(!path){
            throw "file name is not provided for getting file as json";    
        }
        let jsonRead = await fs.readFileAsync(path, "UTF-8");
        return jsonRead;
    }catch(err){
        console.log(err);
    }
};

async function saveStringToFile(path, text){
    try{
        if(!path){
            throw "file name is not provided for saving string to file";
        }
        if(!text){
            throw "No text provided for saving string to file";
        }
        await fs.writeFileAsync(path,text);
    }catch(err){
        console.log(err);
    }
};

async function saveJSONToFile(path, obj){
    try{
        if(!path){
            throw "file name is not provided for saving json to file";
        }
        if(!obj){
            throw "No json provided for saving json to file";
        }
        await fs.writeFileAsync(path, JSON.stringify(obj,null,4));
    }catch(err){
        console.log(err);
    }
};